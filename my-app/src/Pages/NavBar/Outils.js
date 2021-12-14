import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Outils.css";

import NestedGrid from "../../Components/NestedGrid";
import Diction from "../../Components/DictionFolder/Diction";
import MenuListOutils from "../../Components/MenuListOutils";
import { Row, Container } from "react-bootstrap";

export default class Outils extends Component {
  render() {
    return (
      <div>
        <MenuListOutils />
        <Container>
          <h1 className="LexicalTitle" id="Dictionnaire">
            Dictionnaire
          </h1>
          <div>
            <Diction />
          </div>
          <span id="Dictionnaire">
            <hr id="OutilsHr"></hr>
          </span>
          <Row className="Row-Decouv" xs={1} md={1}>
            <h1 className="LexicalTitle" id="Lexique">
              Lexique
            </h1>
            <h2 id="LexicalTitle">Football</h2>
            <div id="LexicalGrid">{NestedGrid()} </div>
            <div id="LexicalGrid">{NestedGrid()} </div>
            <h2 id="LexicalTitle">Natation</h2>
            <div id="LexicalGrid">{NestedGrid()} </div>
            <div id="LexicalGrid">{NestedGrid()} </div>
            <h2 id="LexicalTitle">Peinture</h2>
            <div id="LexicalGrid">{NestedGrid()} </div>
            <div id="LexicalGrid">{NestedGrid()} </div>
            <h2 id="LexicalTitle">Musique</h2>
            <div id="LexicalGrid">{NestedGrid()} </div>
            <div id="LexicalGrid">{NestedGrid()} </div>
          </Row>
        </Container>
      </div>
    );
  }
}
