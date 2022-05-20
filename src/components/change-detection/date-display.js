import { LitElement, html } from "lit";
import { isSameDate } from "./date-utils";
import { changeDetectionStyles } from "./changeDetectionStyles";

export class DateDisplay extends LitElement {
  static properties = {
    date: {
      //checking if date has changed, regular comparison won't work -> Date is an Object
      hasChanged: (value, oldValue) => {
        return !isSameDate(value, oldValue);
      },
    },
  };

  //regular styles
  static styles = [changeDetectionStyles];

  //animation frames
  frames = [{ opacity: "0.5" }, { opacity: "0" }, { opacity: "1" }];

  //getting element to animate from the shadow DOM
  get datefield() {
    return this.renderRoot?.querySelector("#datefield");
  }

  render() {
    return html`<span id="datefield">${this.date?.toLocaleDateString()}</span>`;
  }

  //if date has been updated, let's add an animation to it
  updated(changed) {
    if (changed.has("date")) {
      //adding an animation to the element
      this.datefield.animate(this.frames, 1000);
    }
  }
}

customElements.define("date-display", DateDisplay);
