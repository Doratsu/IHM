import React, { Component } from "react";

import "../Styles/Cours.css";

import { datasCours } from "../Datas/datasCours";
import CardsCours from "../Components/CardsCours";
import MenuList from "../Components/MenuList";

export default class Cours extends Component {
  render() {
    const categories = datasCours.reduce((allCours, current) => {
      return allCours.includes(current.category)
        ? allCours
        : allCours.concat([current.category]);
    }, []);

    return (
      <div>
        <MenuList />
        {categories.map((category) => {
          const datasCoursFiltered = datasCours.filter(
            (prod) => prod.category === category
          );
          return <CardsCours datasCours={datasCoursFiltered} />;
        })}
      </div>
    );
  }
}
