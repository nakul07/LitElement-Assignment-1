/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import './components/search-bar';
import './components/product-table';

/**
 * MyApp component for filterable table.
 */
export class MyApp extends LitElement {
  static get properties() {
    return {
      filteredList: { type: Array },
    };
  }

  /**
   * Constructor function.
   */
  constructor() {
    super();
    this.searchText;
    this.filteredList = [];
    this.finalList = [];

    /**
     * product list
     */
    this.productList = [
      {
        category: 'Sporting Goods',
        price: '$49.99',
        stocked: false,
        name: 'Football',
      },
      {
        category: 'Sporting Goods',
        price: '$9.99',
        stocked: true,
        name: 'Baseball',
      },
      {
        category: 'Sporting Goods',
        price: '$29.99',
        stocked: true,
        name: 'Basketball',
      },
      {
        category: 'Electronics',
        price: '$99.99',
        stocked: true,
        name: 'iPod Touch',
      },
      {
        category: 'Electronics',
        price: '$399.99',
        stocked: true,
        name: 'iPhone 5',
      },
      {
        category: 'Electronics',
        price: '$199.99',
        stocked: false,
        name: 'Nexus 7',
      },
    ];
    this.filteredList = [...this.productList];
  }

  /**
   * Gets style.
   *
   * @returns {Array}
   */
  static get styles() {
    return [
      css`
        main {
          background-color: lightgrey;
          width: 300px;
          height: 100%;
          margin: 50px;
          border: 1px solid black;
        }
        search-bar {
          margin-left: 39px;
        }
      `,
    ];
  }

  /**
   * Renders html
   *
   * @returns {Array}
   */
  render() {
    return html`<main>
      <search-bar .filters=${this.filterList}></search-bar>
      <product-table .productList=${this.filteredList}></product-table>
    </main>`;
  }

  /**
   * Filters the list.
   *
   * @param {string} searchText
   * @param {boolean} isChecked
   */
  filterList = (searchText, isChecked) => {
    const tempItems = [...this.productList];
    let filteredItems;
    if (isChecked) {
      filteredItems = tempItems.filter(
        (item) => item.name.includes(searchText) && item.stocked
      );
    } else {
      filteredItems = tempItems.filter((item) =>
        item.name.includes(searchText)
      );
    }
    this.filteredList = [...filteredItems];
  };
}

customElements.define('my-app', MyApp);
