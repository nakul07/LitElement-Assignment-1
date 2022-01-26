import { LitElement, html, css } from 'lit';
import './product-catagory-row';
import './product-row';

/**
 * product-table component
 */
export class ProductTable extends LitElement {
  /**
   * Get styles
   */
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px black;
        padding: 16px;
        max-width: 800px;
      }
      ul {
        list-style-type: none;
      }
      product-cat-row {
        margin-bottom: 10px;
      }
      product-row {
        margin-bottom: 10px;
      }
    `;
  }

  /**
   * Get properties
   */
  static get properties() {
    return {
      productList: { type: Array },
      catagory: { type: Array },
      name: { type: String },
      price: { type: String },
      lastCat: { type: String },
      stocked: { type: Boolean },
    };
  }

  /**
   * constructor function
   */
  constructor() {
    super();
    this.productList = [];
    this.catagory;
    this.name;
    this.price;
    this.stocked;
    this.lastCat = null;
  }

  /**
   * renders html
   *
   * @returns {Array}
   */
  render() {
    return html`
      <ul>
        ${this.productList.map((list) => {
          if (list.category !== this.lastCat) {
            this.lastCat = list.category;
            return html`
              <li>
                <product-cat-row .catagory=${list.category}></product-cat-row>
                <product-row
                  .name=${list.name}
                  .price=${list.price}
                  .stocked=${list.stocked}
                ></product-row>
              </li>
            `;
          }
          return html`
            <li>
              <product-row
                .name=${list.name}
                .price=${list.price}
                .stocked=${list.stocked}
              ></product-row>
            </li>
          `;
        })}
      </ul>
    `;
  }
}

customElements.define('product-table', ProductTable);
