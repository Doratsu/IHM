import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

import "../../Styles/Francais.css";

export default class Francais extends Component {
  constructor(props) {
    super(props);
    this.setLangueChoisis = this.setLangueChoisis.bind(this);
    this.setLangueDefault = this.setLangueDefault.bind(this);
    this.state = {
      name: "Choisissez",
    };
  }
  setLangueDefault() {
    this.setState({ name: "Choisissez" });
  }
  setLangueChoisis() {
    this.setState({ name: "Anglais" });
  }
  render() {
    return (
      <div id="Francais-Container">
        <h1 id="Texte-h1">Bienvenue sur MEMO`RISE</h1>
        <h2 id="Texte-h2">Quelle langue voulez vous apprendre ?</h2>
        <DropdownButton id="dropdown-basic-button" title={this.state.name}>
          <Dropdown.Item href="#" onClick={this.setLangueDefault}>
            Defaut
          </Dropdown.Item>
          <Dropdown.Item href="#" onClick={this.setLangueChoisis}>
            Anglais
          </Dropdown.Item>
          <Dropdown.Item href="#">A venir</Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}
