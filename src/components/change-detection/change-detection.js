import { LitElement, html } from "lit";
import { localDateFromUTC } from "./date-utils";
import "./date-display";
import { changeDetectionStyles } from "./changeDetectionStyles";

export class ChangeDetection extends LitElement {
  static properties = {
    date: {},
  };

  static styles = [changeDetectionStyles];

  render() {
    return html`
      <section class="changeDetection">
        <h3>Choose a date:</h3>
        <input type="date" @change=${this._dateChanged} />
        <button @click=${this._chooseToday}>Choose Today</button>
        <p>
          Date chosen:
          <date-display .date=${this.date}></date-display>
        </p>
      </section>
    `;
  }

  //private methods
  _dateChanged(e) {
    //taking target's value and parsing it to Date format
    const utcDate = e.target.valueAsDate;
    //if it's not null, add it as date value but parsing it to local date first
    if (utcDate) {
      this.date = localDateFromUTC(utcDate);
      console.log(this.date);
    }
  }

  _chooseToday() {
    this.date = new Date();
    console.log(this.date);
  }
}

customElements.define("change-detection", ChangeDetection);
