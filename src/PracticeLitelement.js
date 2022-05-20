import { LitElement, html } from "lit";
import { practiceLitElementStyles } from "./PracticeLitelementStyles";
import "./components/basic-properties/basic-properties";
import "./components/change-detection/change-detection";
import "./components/attribute-converter/attribute-converter";
import "./components/slotting-children/slotting-children";

export class PracticeLitelement extends LitElement {
  static properties = {
    title: {},
  };

  static styles = [practiceLitElementStyles];

  constructor() {
    super();
    this.title = "Lit Elements Practice";
  }

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>
        <h3>Creating elements statically and dinamically</h3>
        <basic-properties name="statically created"></basic-properties>
        <h3>Detecting changes in props</h3>
        <change-detection></change-detection>
        <h3>Making data conversion</h3>
        <attribute-converter date="2022-05-20"></attribute-converter>
        <h3>Use a slot element to render children</h3>
        <slotting-children>
          <p>Hi, I'm a child element rendered in a slot.</p>
        </slotting-children>
        <h3>...or use a slot element to render many children</h3>
        <slotting-children>
          <p>Hi, I'm another child element rendered by a slot.</p>
          <p>Hi, I'm another child element rendered by a slot.</p>
          <p>Hi, I'm another child element rendered by a slot.</p>
        </slotting-children>
      </main>
    `;
  }
}
