import { LitElement, html } from "lit";
import { basicPropertiesStyles } from "./basicPropertiesStyles";

export class BasicProperties extends LitElement {
  static properties = {
    name: {},
  };

  static styles = [basicPropertiesStyles];

  render() {
    return html`
      <section class="properties">
        <p>Hello, I'm ${this.name}</p>
      </section>
    `;
  }
}

customElements.define("basic-properties", BasicProperties);

//we can also create an element dynamically, with JS methods
const basicProperties = document.createElement("basic-properties");
basicProperties.name = "dinamically created";
document.body.appendChild(basicProperties);
