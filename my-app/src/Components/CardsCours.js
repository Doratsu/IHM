import { Card, Button, Nav, Row, Col, Container } from "react-bootstrap";

import "../Styles/CardsCours.css";

import CoursItem from "./CoursItem";

export default function CardsCours(props) {
  const { datasCours } = props;
  const firstCours = datasCours[0];
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
        <Row className="Row" xs={1} md={1}>
          <h1 id={`${firstCours.category}`}>{firstCours.category}</h1>
          <Col className="Col"></Col>
          {datasCours.map(({ id, name, difficulty, description }) => (
            <Card className="Card">
              <Card.Header className="Card-Header">
                <Nav justify variant="pill" defaultActiveKey="#first">
                  <Nav.Item className="Nav-Item">
                    <Nav.Link href="#first" className="Nav-Link">
                      Cours
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="Nav-Item">
                    <Nav.Link className="Nav-Link">Exos</Nav.Link>
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
                <div className="Card-Button">
                  <Button variant="outline-success" onClick={props.handleClick}>
                    Commencer
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
}
