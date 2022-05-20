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

  static styles = [changeDetectionStyles];

  render() {
    return html`<span id="datefield">${this.date?.toLocaleDateString()}</span>`;
  }
}

customElements.define("date-display", DateDisplay);
