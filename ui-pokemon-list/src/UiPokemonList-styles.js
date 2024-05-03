/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.nav-pokemon {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2rem;
}

.nav-pokemon button {
  width: 80px;
  background-color: #00074e;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 1rem;
  border-radius: 1rem;
}

.loading {
  text-align: center;
}
`;