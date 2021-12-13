import React, { Component } from "react";
import "../Styles/MenuList.css";

export default class MenuListDecouvrir extends Component {
  render() {
    return (
      <div id="MenuList-Container">
        <ul>
          <li id="MenuListTilte">
            <a href="#" id="MenuListAnchor">
              Découvrir
            </a>
          </li>
          <span>
            <hr></hr>
          </span>
          <li id="MenuListItem">
            <a href="#Sport" id="MenuListAnchor">
              Sport
            </a>
          </li>
          <li id="MenuListItem">
            <a href="#Art" id="MenuListAnchor">
              Art
            </a>
          </li>
          <li id="MenuListItem">
            <a href="#Sport" id="MenuListAnchor">
              Sport
            </a>
          </li>
          <li id="MenuListItem">
            <a href="#Art" id="MenuListAnchor">
              Art
            </a>
          </li>{" "}
          <li id="MenuListItem">
            <a href="#Sport" id="MenuListAnchor">
              Sport
            </a>
          </li>
          <li id="MenuListItem">
            <a href="#Art" id="MenuListAnchor">
              Art
            </a>
          </li>{" "}
          <li id="MenuListItem">
            <a href="#Sport" id="MenuListAnchor">
              Sport
            </a>
          </li>
          <li id="MenuListItem">
            <a href="#Art" id="MenuListAnchor">
              Art
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
