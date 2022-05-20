import { LitElement, html } from "lit";
import { practiceLitElementStyles } from "./PracticeLitelementStyles";
import "./components/basic-properties/basic-properties";
import "./components/change-detection/change-detection";
import "./components/attribute-converter/attribute-converter";

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
        <basic-properties name="statically created"></basic-properties>
        <change-detection></change-detection>
        <attribute-converter date="2022-05-20"></attribute-converter>
      </main>
    `;
  }
}
