import { LitElement, html } from "lit";
import { practiceLitElementStyles } from "./components/PracticeLitelementStyles";

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
    return html` <main><h1>${this.title}</h1></main> `;
  }
}
