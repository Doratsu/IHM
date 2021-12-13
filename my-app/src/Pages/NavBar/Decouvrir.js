import React, { Component } from "react";

import "../../Styles/Decouvrir.css";

import { datasDecouv } from "../../Datas/datasDecouv.js";
import CardsDecouvrir from "../../Components/CardsDecouvrir";
import MenuListDecouvrir from "../../Components/MenuListDecouvrir";

export default class Decouvrir extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("Cliqué");
  }
  render() {
    const categories = datasDecouv.reduce((allDecouv, current) => {
      return allDecouv.includes(current.category)
        ? allDecouv
        : allDecouv.concat([current.category]);
    }, []);

    return (
      <div>
        <MenuListDecouvrir />

        {categories.map((category) => {
          const datasDecouvFiltered = datasDecouv.filter(
            (prod) => prod.category === category
          );
          return <CardsDecouvrir datasDecouv={datasDecouvFiltered} />;
        })}
      </div>
    );
  }
}
