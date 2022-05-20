import { LitElement, html } from "lit";
import { slottingChildrenStyles } from "./slottingChildrenStyles";

export class SlottingChildren extends LitElement {
  static styles = [slottingChildrenStyles];

  render() {
    return html`
      <section>
        <slot></slot>
      </section>
    `;
  }
}

customElements.define("slotting-children", SlottingChildren);
