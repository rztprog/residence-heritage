import { Controller } from "@hotwired/stimulus"
import mapboxgl from "mapbox-gl"

export default class extends Controller {
    connect() {
        const token = document.querySelector('meta[name="mapbox-token"]').content
        mapboxgl.accessToken = token

        const latitude = parseFloat(this.data.get("latitude"))
        const longitude = parseFloat(this.data.get("longitude"))
        const name = this.data.get("name");

        const map = new mapboxgl.Map({
            container: this.element,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [longitude, latitude],
            zoom: 14
        })

        new mapboxgl.Marker()
            .setLngLat([longitude, latitude])
            .setPopup(new mapboxgl.Popup().setText(name))
            .addTo(map)

        map.addControl(new mapboxgl.NavigationControl());
        map.scrollZoom.disable();
    }
}

