import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="footer-toggle"
export default class extends Controller {
  static targets = ["list"]

  toggle(event) {
    const clickedIndex = event.target.dataset.index

    this.listTargets.forEach(list => {
      if (list.dataset.index === clickedIndex) {
        
        list.classList.toggle("footer-list")
        return
      }
    })
  }
}
