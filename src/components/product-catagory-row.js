import { LitElement, html, css } from 'lit';

export class ProductCatagoryRow extends LitElement {
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
      catagory: { type: String },
      productList: { type: Array },
    };
  }

  constructor() {
    super();
    this.productList;
    this.catagory;
  }

  render() {
    return html`
      <tr>
        ${this.catagory}
      </tr>
    `;
  }
}

customElements.define('product-cat-row', ProductCatagoryRow);
