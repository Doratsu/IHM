import React, { Component } from "react";

import "../../Styles/Cours.css";

import { datasCours } from "../../Datas/datasCours";
import CardsCours from "../../Components/CardsCours";
import MenuListCours from "../../Components/MenuListCours";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default class Cours extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("Cliqué");
  }
  render() {
    const categories = datasCours.reduce((allCours, current) => {
      return allCours.includes(current.category)
        ? allCours
        : allCours.concat([current.category]);
    }, []);

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={2}>
            <React.Fragment>
              <Grid item xs={2}>
                <MenuListCours />
              </Grid>
              <Grid item xs={9}>
                {categories.map((category) => {
                  const datasCoursFiltered = datasCours.filter(
                    (prod) => prod.category === category
                  );
                  return (
                    <CardsCours
                      datasCours={datasCoursFiltered}
                      onClick={this.handleClick.bind(this)}
                    />
                  );
                })}
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
