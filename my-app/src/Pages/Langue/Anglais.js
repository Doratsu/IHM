import React, { Component } from "react";

import "../../Styles/Anglais.css";

export default class Anglais extends Component {
  render() {
    return (
      <div id="Anglais-Container">
        <h1 id="Texte-h1">Welcome to MEMO`RISE</h1>
        <h2 id="Texte-h2">Wich language would you want to learn</h2>
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
