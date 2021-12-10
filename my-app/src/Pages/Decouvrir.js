import React, { Component } from "react";

import "../Styles/Decouvrir.css";

import { datasDecouv } from "../Datas/datasDecouv.js";
import CardsDecouvrir from "../Components/CardsDecouvrir";

export default class Decouvrir extends Component {
  render() {
    const categories = datasDecouv.reduce((allDecouv, current) => {
      return allDecouv.includes(current.category)
        ? allDecouv
        : allDecouv.concat([current.category]);
    }, []);

    return (
      <div>
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
