import { Card, Nav, Row, Col, Container } from "react-bootstrap";

import { Link } from "react-router-dom";
import "../Styles/CardsCours.css";

import CoursItem from "./CoursItem";

export default function CardsCours(props) {
  const { datasCours } = props;
  const firstCours = datasCours[0];
  return (
    <section
      key={firstCours.id}
      className={
        "product " +
        (firstCours.category === "Vocabulaire"
          ? "first"
          : firstCours.category === "Conjugaison"
          ? "second"
          : "")
      }
    >
      <Container>
        <Row id={`${firstCours.category}`} className="Row" xs={1} md={1}>
          <Col className="Col">
            <h1>{firstCours.category}</h1>
          </Col>
          {datasCours.map(({ id, name, difficulty, description }) => (
            <Card className="Card">
              <Card.Header className="Card-Header">
                <Nav justify variant="pill" defaultActiveKey="#first">
                  <Nav.Item className="Nav-Item">
                    <Nav.Link
                      as={Link}
                      to={"/Lecon".concat(id)}
                      href="#first"
                      className="Nav-Link"
                    >
                      Leçon
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="Nav-Item">
                    <Nav.Link
                      as={Link}
                      to={"/Exercice".concat(id)}
                      className="Nav-Link"
                    >
                      Exercices
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body className="Card-Body">
                <Card.Title className="Card-Title">
                  {name} {id}
                </Card.Title>
                <CoursItem id={id} />
                <Card.Text className="Card-Text">Niveau</Card.Text>
                <CoursItem difficulty={difficulty} />
                <Card.Text className="Card-Text-Desc">{description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </section>
  );
}
