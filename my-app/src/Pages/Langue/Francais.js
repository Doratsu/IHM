import React, { Component } from "react";

import "../../Styles/Francais.css";

export default class Francais extends Component {
  render() {
    return (
      <div id="Francais-Container">
        <h1 id="Texte-h1">Bienvenue sur MEMO`RISE</h1>
        <h2 id="Texte-h2">Quelle langue voulez vous apprendre</h2>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </div>
    );
  }
}
