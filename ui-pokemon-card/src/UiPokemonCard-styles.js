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

.card-pokemon {
  background-color: #f61851;
  margin: 0 auto;
  margin-top: 2em;
  border-radius: 2rem;
  box-shadow: 8px 8px 24px black;
  padding: 0.5rem;
  color: #fff;
  font-size: 0.8rem;
}

.card-title {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.card-title .card-title-text {
  text-align: center;
  border: 2px solid black;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  background: white;
  background: linear-gradient(120deg, white 0%, black 100%);
}

.image-container {
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 1rem;
  background: #bef0f4;
  background: linear-gradient(120deg, #bef0f4 0%, #1ca7bc 67%);
}

.image-container img {
  display: block;
  width: 100%;
}

.card-arrow {
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #f9ed62;
}

.card-arrow:hover {
  background-color: #f7f2be;
}

.card-arrow img {
  width: 100%;
}

.info-container {
  text-align: center;
}

@media (min-width: 668px) {
  .card-pokemon {
    max-width: 16rem;
  }
}
`;