import { Card, Row, Col, Container } from "react-bootstrap";

import "../Styles/CardsDecouvrir.css";

export default function CardsCours(props) {
  const { datasDecouv } = props;
  const firstCours = datasDecouv[0];
  return (
    <div>
      <section
        key={firstCours.id}
        className={
          "product " +
          (firstCours.category === "Vocab"
            ? "first"
            : firstCours.category === "Conjugaison"
            ? "second"
            : "")
        }
      ></section>
      <Container>
        <Row className="Row-Decouv" xs={1} md={1}>
          <h1 id="TitreCategorie-Decouv">{firstCours.category}</h1>
          <Col className="Col-Decouv"></Col>
          {datasDecouv.map(({ id, name, description }) => (
            <Card className="Card-Decouv">
              <Card.Body className="Card-Body-Decouv">
                <Card.Title className="Card-Title-Decouv">{name}</Card.Title>
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
