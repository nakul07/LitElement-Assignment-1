import { LitElement, html, css, render } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

let styles = {
  color: 'red',
};

export class ProductRow extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 800px;
      }
    `;
  }

  static get properties() {
    return {
      productList: { type: Array },
      name: { type: String },
      price: { type: String },
      stocked: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.productList;
    this.name; //this.productList.name;
    this.price; //this.productList.price;
    this.stocked;
  }

  render() {
    return html`
      <tr>
        <td style=${!this.stocked ? styleMap(styles) : 'black'}>${this.name}</td>
        <td>${this.price}</td>
      </tr>
    `;
  }
}

customElements.define('product-row', ProductRow);
