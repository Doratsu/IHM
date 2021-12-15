import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Article.css";
import { Card, Container } from "react-bootstrap";

export default class ArticleFootball extends Component {
  render() {
    return (
      <div id="Top">
        <h1 className="LeconTitle">ArticleFootball here soon</h1>
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
