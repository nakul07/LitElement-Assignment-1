import { LitElement, html, css } from 'lit';

/**
 *  Product Catagory row.
 */
export class ProductCatagoryRow extends LitElement {
  /**
   * Get styles.
   *
   */
  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 800px;
      }
      tr {
        font-size: 20px;
        color: blue;
      }
    `;
  }

  /**
   * Get properties
   */
  static get properties() {
    return {
      catagory: { type: String },
      productList: { type: Array },
    };
  }

  /**
   * constructor function
   */
  constructor() {
    super();
    this.productList;
    this.catagory;
  }

  /**
   * Renders html
   *
   * @returns {Array}
   */
  render() {
    return html`
      <tr>
        ${this.catagory}
      </tr>
    `;
  }
}

customElements.define('product-cat-row', ProductCatagoryRow);
