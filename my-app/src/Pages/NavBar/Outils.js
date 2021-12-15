import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Outils.css";

import NestedGrid from "../../Components/NestedGrid";
import Diction from "../../Components/DictionFolder/Diction";
import MenuListOutils from "../../Components/MenuListOutils";
import { Row, Container } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default class Outils extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={2}>
            <React.Fragment>
              <Grid item xs={3}>
                <MenuListOutils />{" "}
              </Grid>
              <Grid item xs={8}>
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
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
