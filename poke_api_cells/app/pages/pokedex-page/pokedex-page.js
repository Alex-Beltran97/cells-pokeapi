import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html  } from 'lit-element';

import '@cells-components/cells-template-paper-drawer-panel';
import '@bbva-web-components/bbva-header-main';

import css from './pokedex-page-styles';

import '@prueba-tech/bgadp-pokeapi-dm';
import '@prueba-tech/ui-pokemon-list/ui-pokemon-list.js';

/* eslint-disable new-cap */
class PokedexPage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'pokedex-page';
  }

  static get properties() {
    return {
      pokemons: { type: Array },
    };
  }

  constructor() {
    super();
    this.pokemons = [];
  }

  async firstUpdated() {
    this.pokeApiDm = this.shadowRoot.querySelector('#pokeapi-data');
    this.pokemons = await this.pokeApiDm.getPokemons();
  }
  
  render() {
    
    return html`
      <cells-template-paper-drawer-panel mode="seamed">
        <div slot="app__header">
          <h1 class="header-title">PokeDex</h1>
        </div>
        
        <div slot="app__main" class="container">
          <ui-pokemon-list
            pokemonsData="${ JSON.stringify(this.pokemons) }"
            @handle-prev-page="${ ()=> this._handleLoadPokemons('previous') }"
            @handle-next-page="${ ()=> this._handleLoadPokemons('next') }"
          ></ui-pokemon-list>
        </div>
        <bgadp-pokeapi-dm id="pokeapi-data"></bgadp-pokeapi-dm>
    </cells-template-paper-drawer-panel>`;
  }

  async _handleLoadPokemons(key = '') {
    if (this.pokeApiDm[key] === null) {
      return;
    }
    this.pokemons = [];
    this.pokeApiDm.url = this.pokeApiDm[key];
    this.pokemons = await this.pokeApiDm.getPokemons();
  }

  static get styles() {
    return [ css ];
  }
}

window.customElements.define(PokedexPage.is, PokedexPage);