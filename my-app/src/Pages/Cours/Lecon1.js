import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Lecon.css";
import { Card, Container } from "react-bootstrap";

export default class Lecon1 extends Component {
  render() {
    return (
      <div>
        <h1 className="LeconTitle">Lesson 1 here soon</h1>
        <Container>
          <Card className="LeconCard">
            <Card.Body className="LeconCardBody">
              <p id="LeconText">Pour commencer ...</p>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
