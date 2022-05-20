import { LitElement, html } from "lit";
import { attributeConverterStyles } from "./attributeConverterStyles";

export class AttributeConverter extends LitElement {
  static properties = {
    date: {
      //converting attribute
      converter: (attrValue) => {
        if (attrValue) return new Date(attrValue);
        else return undefined;
      },
    },
  };

  static styles = [attributeConverterStyles];

  render() {
    return html`
      <section>
        <p>Attribute Converter Date: ${this.date}</p>
        <p>Modified Date: ${this.date.toLocaleDateString()}</p>
      </section>
    `;
  }
}

customElements.define("attribute-converter", AttributeConverter);
