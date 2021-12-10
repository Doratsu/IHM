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
import Outils from "../Pages/Outils";
import Francais from "../Pages/Francais";
import Anglais from "../Pages/Anglais";

export default class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.setLangue = this.setLangue.bind(this);
    this.setLangueAnglais = this.setLangueAnglais.bind(this);
    this.setLangueFrancais = this.setLangueFrancais.bind(this);
    this.state = {
      name: "Votre Langue",
      link: "/",
    };
  }
  setLangue() {
    this.setState({ name: "Votre Langue", link: "/francais" });
  }
  setLangueAnglais() {
    this.setState({ name: "Anglais", link: "/anglais" });
  }
  setLangueFrancais() {
    this.setState({ name: "Francais", link: "/francais" });
  }
  render() {
    if (this.state.link === "/francais" || this.state.link === "/") {
      return (
        <Router>
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
              <Navbar.Brand href="/">MEMO`RISE</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={this.state.link}>
                    Accueil
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Cours">
                    Cours
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Decouvrir">
                    Découvrir
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Outils">
                    Outils
                  </Nav.Link>
                </Nav>
                {/*<Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Votre recherche"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Rechercher</Button>
              </Form>*/}
              </Navbar.Collapse>
            </Container>
            <NavDropdown title={this.state.name} id="basic-langue-nav-dropdown">
              <div>
                <NavDropdown.Item as={Link} to="/" onClick={this.setLangue}>
                  None
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item
                  as={Link}
                  to="/anglais"
                  onClick={this.setLangueAnglais}
                >
                  Anglais
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item
                  as={Link}
                  to="/francais"
                  onClick={this.setLangueFrancais}
                >
                  Francais
                </NavDropdown.Item>
              </div>
            </NavDropdown>
          </Navbar>
          <div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Cours" element={<Cours />}></Route>
              <Route path="/Decouvrir" element={<Decouvrir />}></Route>
              <Route path="/Outils" element={<Outils />}></Route>
              <Route path="/Anglais" element={<Anglais />}></Route>
              <Route path="/Francais" element={<Francais />}></Route>
            </Routes>
          </div>
        </Router>
      );
    } else if (this.state.link === "/anglais") {
      return (
        <Router>
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
              <Navbar.Brand href="/">MEMO`RISE</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={this.state.link}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Cours">
                    Teachings
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Decouvrir">
                    Discover
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Outils">
                    Tools
                  </Nav.Link>
                </Nav>
                {/*<Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Votre recherche"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Rechercher</Button>
              </Form>*/}
              </Navbar.Collapse>
            </Container>
            <NavDropdown title={this.state.name} id="basic-langue-nav-dropdown">
              <div>
                <NavDropdown.Item as={Link} to="/" onClick={this.setLangue}>
                  None
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item
                  as={Link}
                  to="/anglais"
                  onClick={this.setLangueAnglais}
                >
                  Anglais
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item
                  as={Link}
                  to="/francais"
                  onClick={this.setLangueFrancais}
                >
                  French
                </NavDropdown.Item>
              </div>
            </NavDropdown>
          </Navbar>
          <div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Cours" element={<Cours />}></Route>
              <Route path="/Decouvrir" element={<Decouvrir />}></Route>
              <Route path="/Outils" element={<Outils />}></Route>
              <Route path="/Anglais" element={<Anglais />}></Route>
              <Route path="/Francais" element={<Francais />}></Route>
            </Routes>
          </div>
        </Router>
      );
    }
  }
}
