import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './UiPokemonCard-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<ui-pokemon-card></ui-pokemon-card>
```

##styling-doc

@customElement ui-pokemon-card
*/
export class UiPokemonCard extends LitElement {
  static get is() {
    return 'ui-pokemon-card';
  }

  static get styles() {
    return [ styles ];
  }

  // Declare properties
  static get properties() {
    return {
      pokemon: { type: String },
      id: { type: Number, attributes: false },
      name: { type: String, attributes: false },
      image: { type: String, attributes: false },
      type: { type: String, attributes: false },
      evolutions: { type: Number, attributes: false },
      index: { type: Number, attributes: false },
      leftArrowIcon: { type: String },
      rightArrowIcon: { type: String  }
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.index = 0;
  }

  firstUpdated() {
    this._handleAssignData();
  }

  updated() {
    this._handleAssignData();
  }

  _handleAssignData() {
    const { evolutionNumber, id, image, name: pokemonName, type } = this.pokemon ? JSON.parse(this.pokemon)[this.index] : {};
    this.id = id;
    this.name = pokemonName;
    this.image = image;
    this.type = type;
    this.evolutions = evolutionNumber;
  }

  // Define a template
  render() {
    if (this.id)
      return html`
        <slot></slot>
        <div class="card-pokemon">
          <div class="card-title">
            <button 
              id="arrow-left"
              class="card-arrow"
              @click="${ () => this._handleChangeEvolution(false) }"
            >
              <img src="https://cdn1.iconfinder.com/data/icons/user-interface-2-glyph/32/ui_left_arrow_triangle-512.png" alt="left-button" />
            </button>
            <p class="card-title-text">${ this.name }</p>              
            <button
              id="arrow-right"
              class="card-arrow"
              @click="${ () => this._handleChangeEvolution() }"
            >
              <img src="https://static.thenounproject.com/png/1666277-200.png" alt="right-button" />
            </button>
          </div>
          <figure class="image-container">
            <img src="${ this.image }" class="pokemon-image" alt="${ this.name }" />
          </figure>
          <div class="info-container">
            <p>
              <strong>Tipo:</strong>
              ${ this.type }
            </p>
            <p>
              <strong>Evoluciones:</strong>
              ${ this.evolutions }
            </p>
          </div>            
        </div>
      `;
  }

  _handleChangeEvolution(next = true) {
    if (next && (this.index === 0 || this.index === 1) && (this.index + 1) !== this.evolutions) {
      this.index++;
    } else if (!next && (this.index === 2 || this.index === 1)) {
      this.index--;
    }
  }
}
