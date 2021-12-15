import React, { Component } from "react";

import "../../Styles/Decouvrir.css";

import { datasDecouv } from "../../Datas/datasDecouv.js";
import CardsDecouvrir from "../../Components/CardsDecouvrir";
import MenuListDecouvrir from "../../Components/MenuListDecouvrir";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={2}>
            <React.Fragment>
              <Grid item xs={2}>
                <MenuListDecouvrir />
              </Grid>
              <Grid item xs={9}>
                {categories.map((category) => {
                  const datasDecouvFiltered = datasDecouv.filter(
                    (prod) => prod.category === category
                  );
                  return <CardsDecouvrir datasDecouv={datasDecouvFiltered} />;
                })}
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
