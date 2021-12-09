import { Component } from "react";
import { Card, Button, Nav } from "react-bootstrap";

import "../Styles/Cards.css";

import CoursItem from "./CoursItem";

export default class Cards extends Component {
  render() {
    return (
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
            {this.props.name} {this.props.id}
          </Card.Title>
          <CoursItem id={this.props.id} />
          <Card.Text className="Card-Text">Niveau</Card.Text>
          <CoursItem difficulty={this.props.difficulty} />
          <Card.Text className="Card-Text-Desc">
            {this.props.description}
          </Card.Text>
          <div className="Card-Button">
            <Button variant="outline-success">Commencer</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
