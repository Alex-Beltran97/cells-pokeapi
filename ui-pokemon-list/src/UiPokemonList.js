import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './UiPokemonList-styles.js';

import '@prueba-tech/ui-pokemon-card/ui-pokemon-card.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<ui-pokemon-list></ui-pokemon-list>
```

##styling-doc

@customElement ui-pokemon-list
*/
export class UiPokemonList extends LitElement {
  static get is() {
    return 'ui-pokemon-list';
  }

  // Declare properties
  static get properties() {
    return {
      pokemons: { type: Array },
      pokemonsData: { type: String }
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.pokemons = [];
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('ui-pokemon-list-shared-styles')
    ];
  }

  // Define a template
  render() {
    this.pokemons = this.pokemonsData ? JSON.parse(this.pokemonsData) : [];

    return html`
      <nav class="nav-pokemon">
        <button @click="${ this._handlePrevPage }">Preview</button>
        <button @click="${ this._handleNextPage }">Next</button>
      </nav>
      ${ this.pokemons?.length === 0 ? html `
        <strong class="loading">Cargando...</strong> 
      ` : ''}          
      ${ this.pokemons.map(pokemon => html `
        <ui-pokemon-card          
          pokemon="${ JSON.stringify(pokemon) }"
        ></ui-pokemon-card>
      `)}
    `;
  }

  async _handlePrevPage() {
    this.dispatchEvent(new CustomEvent('handle-prev-page', { bubbles: true, composed: true }));
  }

  async _handleNextPage() {
    this.dispatchEvent(new CustomEvent('handle-next-page', { bubbles: true, composed: true }));
  }
}
