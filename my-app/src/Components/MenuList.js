import React, { Component } from "react";
import "../Styles/MenuList.css";

export default class MenuList extends Component {
  render() {
    return (
      <div id="MenuList-Container">
        <ul>
          <li>
            <a href="#Vocab">Vocab</a>
          </li>
          <li>
            <a href="#Conjugaison">Conjugaison</a>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}
