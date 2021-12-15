import React, { Component } from "react";
import "../Styles/TopNavBar.css";

import TopNavBarDefault from "./NavBar/TopNavBarDefault";
import TopNavBarFr from "./NavBar/TopNavBarFr";
import TopNavBarEn from "./NavBar/TopNavBarEn";

export default class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.setLangue = this.setLangue.bind(this);
    this.setLangueAnglais = this.setLangueAnglais.bind(this);
    this.setLangueFrancais = this.setLangueFrancais.bind(this);
    this.setBtnDisable = this.setBtnDisable.bind(this);
    this.setBtnEnable = this.setBtnEnable.bind(this);
    this.state = {
      name: "Your Language",
      link: "/",
      value: true,
    };
  }

  setLangue() {
    this.setBtnDisable();
    this.setState({ name: "Your Language", link: "/" });
  }
  setLangueAnglais() {
    this.setBtnEnable();
    this.setState({ name: "English", link: "/anglais" });
  }
  setLangueFrancais() {
    this.setBtnEnable();
    this.setState({ name: "Francais", link: "/francais" });
  }
  setBtnDisable() {
    this.setState({ value: true });
  }
  setBtnEnable() {
    this.setState({ value: false });
  }
  render() {
    if (this.state.link === "/") {
      return <TopNavBarDefault />;
    } else if (this.state.link === "/anglais") {
      return <TopNavBarEn />;
    } else if (this.state.link === "/francais") {
      return <TopNavBarFr />;
    }
  }
}
