import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
  Container,
} from "react-bootstrap";
import "../Styles/TopNavBar.css";

import Home from "../Pages/Home";
import Cours from "../Pages/Cours";
import Decouvrir from "../Pages/Decouvrir";
import Francais from "../Pages/Francais";
import Anglais from "../Pages/Anglais";
import Espagnol from "../Pages/Espagnol";

export default class TopNavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
              <Navbar.Brand href="/">Nom Site</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">
                    Accueil
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Cours">
                    Cours
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Decouvrir">
                    Decouvrir
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Votre recherche"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Rechercher</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
            <NavDropdown title="Votre Langue" id="basic-langue-nav-dropdown">
              <div>
                <NavDropdown.Item as={Link} to="/anglais">
                  Anglais
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item as={Link} to="/francais">
                  Francais
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item as={Link} to="/espagnol">
                  Espagnol
                </NavDropdown.Item>
              </div>
            </NavDropdown>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Cours" element={<Cours />}></Route>
            <Route path="/Decouvrir" element={<Decouvrir />}></Route>
            <Route path="/Anglais" element={<Anglais />}></Route>
            <Route path="/Francais" element={<Francais />}></Route>
            <Route path="/Espagnol" element={<Espagnol />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
