/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

/**
 * An example test element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class SearchBar extends LitElement {
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
      filters: { type: Function },
    };
  }

  constructor() {
    super();
    this.value = '';
    this.isChecked = false;
    this.filters = () => {};
  }

  render() {
    return html`
      <input
        type="text"
        .value=${this.value}
        @change=${this.updateSearchText}
        placeholder="Search"
      />
      <br />
      <input
        type="checkbox"
        ?checked=${this.isChecked}
        @change=${this.updateIsChecked}
      />
      <span>Only show product in stock</span>
    `;
  }

  updateSearchText = (e) => {
    this.value = e.target.value;
    this.filters(this.value, this.isChecked);
  };

  updateIsChecked = (e) => {
    this.isChecked = e.target.checked;
    this.filters(this.value, this.isChecked);
  };
}

customElements.define('search-bar', SearchBar);
