import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

import "../Styles/Cours.css";

import { datasCours } from "../Datas/datasCours";
import Cards from "../Components/Cards";

export default class Cours extends Component {
  render() {
    return (
      <Container>
        <Row className="Row" xs={1} md={1}>
          <h1 id="TitreCategorie">Vocabulaire</h1>
          <Col className="Col">
            {datasCours.map(
              ({ id, name, difficulty, category, description }) => (
                <Cards
                  id={id}
                  name={name}
                  difficulty={difficulty}
                  category={category}
                  description={description}
                />
              )
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
