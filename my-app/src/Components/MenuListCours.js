import React, { Component } from "react";
import "../Styles/MenuList.css";

export default class MenuListCours extends Component {
  render() {
    return (
      <div id="MenuList-Container">
        <ul>
          <li id="MenuListTilte">
            <a href="#top" id="MenuListAnchor">
              Cours
            </a>
          </li>
          <span>
            <hr></hr>
          </span>
          <li id="MenuListItem">
            <a href="#Vocabulaire" id="MenuListAnchor">
              Vocabulaire
            </a>
          </li>
          <li id="MenuListItem">
            <a href="#Conjugaison" id="MenuListAnchor">
              Conjugaison
            </a>
          </li>
          <li id="MenuListItem">
            <a href="#Vocabulaire" id="MenuListAnchor">
              Vocabulaire
            </a>
          </li>
          <li id="MenuListItem">
            <a href="#Conjugaison" id="MenuListAnchor">
              Conjugaison
            </a>
          </li>{" "}
          <li id="MenuListItem">
            <a href="#Vocabulaire" id="MenuListAnchor">
              Vocabulaire
            </a>
          </li>
          <li id="MenuListItem">
            <a href="#Conjugaison" id="MenuListAnchor">
              Conjugaison
            </a>
          </li>{" "}
          <li id="MenuListItem">
            <a href="#Vocabulaire" id="MenuListAnchor">
              Vocabulaire
            </a>
          </li>
          <li id="MenuListItem">
            <a href="#Conjugaison" id="MenuListAnchor">
              Conjugaison
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
