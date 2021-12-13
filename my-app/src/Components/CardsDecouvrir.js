import React, { useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../Styles/CardsDecouvrir.css";

import ScrollToTop from "./ScrollToTop";

export default function CardsDecouvrir(props) {
  const { datasDecouv } = props;
  const firstDecouv = datasDecouv[0];
  return (
    <div>
      <section
        key={firstDecouv.id}
        className={
          "product " +
          (firstDecouv.category === "Sport"
            ? "first"
            : firstDecouv.category === "Art"
            ? "second"
            : "")
        }
      ></section>
      <Container>
        <Row className="Row-Decouv" xs={1} md={1}>
          <h1 id={`${firstDecouv.category}`}>{firstDecouv.category}</h1>
          <Col className="Col-Decouv"></Col>
          {datasDecouv.map(({ id, name, description }) => (
            <Card className="Card-Decouv">
              <Card.Body
                className="Card-Body-Decouv"
                as={Link}
                to={"/Article".concat(name)}
                onClick={ScrollToTop}
              >
                <Card.Title id={name} className="Card-Title-Decouv">
                  {name}
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={"./images/".concat(name) + ".jpg"}
                  className="Card-Image-Decouv"
                />
                <Card.Text className="Card-Text-Desc-Decouv">
                  {description}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
}
