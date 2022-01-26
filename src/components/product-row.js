import { LitElement, html, css, render } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

/**
 * Styles
 */
let styles = {
  color: 'red',
};

/**
 * Product-row compoennt
 */
export class ProductRow extends LitElement {
  /**
   * Get styles
   */
  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 800px;
      }
      .price {
        margin-left: 30px;
      }
    `;
  }

  /**
   * get properties
   */
  static get properties() {
    return {
      productList: { type: Array },
      name: { type: String },
      price: { type: String },
      stocked: { type: Boolean },
    };
  }

  /**
   * constructor function
   */
  constructor() {
    super();
    this.productList;
    this.name; //this.productList.name;
    this.price; //this.productList.price;
    this.stocked;
  }

  /**
   *
   * @returns {Array}
   */
  render() {
    return html`
      <span style=${!this.stocked ? styleMap(styles) : 'black'}
        >${this.name}</span
      >
      <span class="price">${this.price}</span>
    `;
  }
}

customElements.define('product-row', ProductRow);
