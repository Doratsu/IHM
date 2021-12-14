import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

import "../../Styles/Anglais.css";

export default class Anglais extends Component {
  constructor(props) {
    super(props);
    this.setLangueChoisis = this.setLangueChoisis.bind(this);
    this.setLangueDefault = this.setLangueDefault.bind(this);
    this.state = {
      name: "Choose",
    };
  }
  setLangueDefault() {
    this.setState({ name: "Choose" });
  }
  setLangueChoisis() {
    this.setState({ name: "French" });
  }
  render() {
    return (
      <div id="Anglais-Container">
        <h1 id="Texte-h1">Welcome to MEMO`RISE</h1>
        <h2 id="Texte-h2">Wich language would you want to learn ?</h2>
        <DropdownButton id="dropdown-basic-button" title={this.state.name}>
          <Dropdown.Item href="#" onClick={this.setLangueDefault}>
            Default
          </Dropdown.Item>
          <Dropdown.Item href="#" onClick={this.setLangueChoisis}>
            French
          </Dropdown.Item>
          <Dropdown.Item href="#">Coming Soon</Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}
