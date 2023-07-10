import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="something"
export default class extends Controller {
  static outlets = ["alert"]

  connect() {
  }

  clicked() {
    if (this.hasAlertOutlet) {
      this.alertOutlet.alert("something clicked!")
      
      // For multiple alert outlets on the page
      // this.alertOutlets.forEach(alert => {
      //   alert.alert("something clicked from alert object!")
      // });
    }
  }
}
