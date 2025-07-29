import { Controller } from "@hotwired/stimulus"
import mapboxgl from "mapbox-gl"

export default class extends Controller {
    connect() {
        const token = document.querySelector('meta[name="mapbox-token"]').content
        mapboxgl.accessToken = token

        // Real values
        const latitude = parseFloat(this.data.get("latitude"))
        const longitude = parseFloat(this.data.get("longitude"))
        const name = this.data.get("name")
        const address = this.data.get("address")

        // Fallback values
        const isValidCoords = !isNaN(latitude) && !isNaN(longitude)
        const fallbackCoords = [3.057256, 50.62925] // Lille
        const center = isValidCoords ? [longitude, latitude] : fallbackCoords

        this.map = new mapboxgl.Map({
            container: this.element,
            style: 'mapbox://styles/mapbox/standard',
            center: center,
            zoom: 15
        })

        // Add marker if valid coords
        if (isValidCoords) {
            new mapboxgl.Marker()
                .setLngLat([longitude, latitude])
                .setPopup(new mapboxgl.Popup({ offset: 25, closeButton: true, closeOnClick: true }).setHTML(`
                    <div class="custom-popup">
                        <h3><b>${name}</b></h3>
                        <p>${address}</p>
                    </div>
                `))
                .addTo(this.map)
        }

        this.map.scrollZoom.disable();
        this.map.addControl(new mapboxgl.NavigationControl());
        this.map.addControl(new mapboxgl.FullscreenControl());
        this.map.addControl(new mapboxgl.GeolocateControl());
        this.map.addControl(new mapboxgl.ScaleControl());

        // Force resize sometimes
        this.map.on("load", () => {
            this.map.resize()
        })
    }

    disconnect() {
        if (this.map) {
            this.map.remove()
            this.map = null
        }
    }
}


