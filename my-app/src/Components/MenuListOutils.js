import React, { Component } from "react";
import "../Styles/MenuList.css";

export default class MenuListOutils extends Component {
  render() {
    return (
      <div id="MenuList-Container">
        <ul>
          <li id="MenuListTilte">
            <a href="#top" id="MenuListAnchor">
              Outils
            </a>
          </li>
          <span>
            <hr></hr>
          </span>
          <li id="MenuListItem">
            <a href="#Dictionnaire" id="MenuListAnchor">
              Dictionnaire
            </a>
          </li>
          <li id="MenuListItem">
            <a href="#Lexique" id="MenuListAnchor">
              Lexique
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
