import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Article.css";
import { Card, Container } from "react-bootstrap";

export default class ArticlePeinture extends Component {
  render() {
    return (
      <div id="Top">
        <h1 className="LeconTitle">ArticlePeinture here soon</h1>
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
