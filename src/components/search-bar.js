/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

/**
 * Search bar component.
 *
 */
export class SearchBar extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }

  /**
   * Get properties
   */
  static get properties() {
    return {
      filters: { type: Function },
    };
  }

  /**
   * constructor function
   */
  constructor() {
    super();
    this.value = '';
    this.isChecked = false;
    this.filters = () => {};
  }

  /**
   * Renders html
   *
   * @returns {Array}
   */
  render() {
    return html`
      <input
        type="text"
        .value=${this.value}
        @input=${this.updateSearchText}
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

  /**
   * Updates the search value  calls filter function.
   *
   * @param {event} e -  event
   */
  updateSearchText = (e) => {
    this.value = e.target.value;
    this.filters(this.value, this.isChecked);
  };

  /**
   * Updates the checkbox and calls filter function.
   *
   * @param {event} e - event
   */
  updateIsChecked = (e) => {
    this.isChecked = e.target.checked;
    this.filters(this.value, this.isChecked);
  };
}

customElements.define('search-bar', SearchBar);
