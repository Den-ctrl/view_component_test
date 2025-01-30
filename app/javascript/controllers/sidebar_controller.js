import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["container", "label", "logo", "icon", "buttonContainer"];

  toggle() {
    this.containerTarget.classList.toggle("w-14");

    this.labelTargets.forEach((label) => {
      label.classList.toggle("hidden");
      label.classList.toggle("opacity-0");
    });

    // Hide or show the logo
    this.logoTarget.classList.toggle("hidden");

    // Toggle button icon
    this.iconTarget.innerHTML = this.iconTarget.innerHTML.includes("7.72 12.53")
      ? `<path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/>`
      : `<path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd"/>`;

    // Toggle background and border color on button's container
    // this.buttonContainerTarget.classList.toggle("border-gray-200");
    // this.buttonContainerTarget.classList.toggle("dark:bg-gray-900");
  }
}
