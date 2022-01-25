import { LitElement, html, css } from 'lit';
import './product-catagory-row';
import './product-row';

export class ProductTable extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }

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

  constructor() {
    super();
    this.productList = [];
    this.catagory;
    this.name;
    this.price;
    this.stocked;
    this.lastCat = null;
  }

  render() {
    return html`
      <ul>
        ${this.productList.map((list) => {
          if (list.category !== this.lastCat) {
            this.lastCat = list.category;
            return html`
              <li>
                <product-cat-row .catagory=${list.category}></product-cat-row
                ><br />
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
