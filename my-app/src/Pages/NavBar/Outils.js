import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Outils.css";

export default class Outils extends Component {
  render() {
    return (
      <div>
        <h1>Vous etes sur la page Outils</h1>
        <h2>
          <ul>Lexique</ul>
        </h2>
        <h3>
          <li>
            <ul>Notre Langue</ul>
            <ul>Langue apprendre</ul>
          </li>
          <li>
            <ul>Notre Langue</ul>
            <ul>Langue apprendre</ul>
          </li>
          <li>
            <ul>Notre Langue</ul>
            <ul>Langue apprendre</ul>
          </li>
        </h3>
      </div>
    );
  }
}
