import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "../Styles/TopNavBar.css";

import Home from "../Pages/NavBar/Home";
import Cours from "../Pages/NavBar/Cours";
import Exercice from "../Pages/Exos/Exercice1";
import Decouvrir from "../Pages/NavBar/Decouvrir";
import Outils from "../Pages/NavBar/Outils";
import Francais from "../Pages/Langue/Francais";
import Anglais from "../Pages/Langue/Anglais";
import Lecon1 from "../Pages/Cours/Lecon1";
import Exercice1 from "../Pages/Exos/Exercice1";
import Lecon2 from "../Pages/Cours/Lecon2";
import Exercice2 from "../Pages/Exos/Exercice2";
import ArticleFootball from "../Pages/Articles/ArticleFootball";
import ArticlePeinture from "../Pages/Articles/ArticlePeinture";

export default class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.setLangue = this.setLangue.bind(this);
    this.setLangueAnglais = this.setLangueAnglais.bind(this);
    this.setLangueFrancais = this.setLangueFrancais.bind(this);
    this.setBtnDisable = this.setBtnDisable.bind(this);
    this.setBtnEnable = this.setBtnEnable.bind(this);
    this.state = {
      name: "Your Language",
      link: "/",
      value: "",
    };
  }

  setLangue() {
    this.setState({ name: "Your Language", link: "/anglais" });
  }
  setLangueAnglais() {
    this.setState({ name: "Anglais", link: "/anglais" });
  }
  setLangueFrancais() {
    this.setState({ name: "Francais", link: "/francais" });
  }
  setBtnDisable() {
    this.setState({ value: true });
  }
  setBtnEnable() {
    this.setState({ value: false });
  }
  render() {
    if (this.state.link === "/" && this.state.name === "Your Language") {
      return (
        <Router>
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
              <Navbar.Brand href="/">MEMO`RISE</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link
                    disabled={(this.state.value = false)}
                    as={Link}
                    to={this.state.link}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    disabled={(this.state.value = true)}
                    as={Link}
                    to="/Cours"
                  >
                    Teachings
                  </Nav.Link>
                  <Nav.Link
                    disabled={(this.state.value = true)}
                    as={Link}
                    to="/Decouvrir"
                  >
                    Discover
                  </Nav.Link>
                  <Nav.Link
                    disabled={(this.state.value = true)}
                    as={Link}
                    to="/Outils"
                  >
                    Tools
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
            <NavDropdown title={this.state.name} id="basic-langue-nav-dropdown">
              <div>
                <NavDropdown.Item
                  as={Link}
                  to="/"
                  onClick={this.setLangue}
                  onClick={this.setBtnDisable}
                >
                  None
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item
                  as={Link}
                  to="/anglais"
                  onClick={this.setLangueAnglais}
                  onClick={this.setBtnEnable}
                >
                  English
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item
                  as={Link}
                  to="/francais"
                  onClick={this.setLangueFrancais}
                  onClick={this.setBtnEnable}
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
              <Route path="/Exercice" element={<Exercice />}></Route>
              <Route path="/Decouvrir" element={<Decouvrir />}></Route>
              <Route path="/Outils" element={<Outils />}></Route>
              <Route path="/Anglais" element={<Anglais />}></Route>
              <Route path="/Francais" element={<Francais />}></Route>
              <Route path="/Lecon1" element={<Lecon1 />}></Route>
              <Route path="/Exercice1" element={<Exercice1 />}></Route>
              <Route path="/Lecon2" element={<Lecon2 />}></Route>
              <Route path="/Exercice2" element={<Exercice2 />}></Route>
              <Route
                path="/ArticleFootball"
                element={<ArticleFootball />}
              ></Route>
              <Route
                path="/ArticlePeinture"
                element={<ArticlePeinture />}
              ></Route>
            </Routes>
          </div>
        </Router>
      );
    } else if (
      this.state.link === "/anglais" &&
      this.state.name === "Anglais"
    ) {
      return (
        <Router>
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
              <Navbar.Brand href="/">MEMO`RISE</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link
                    disabled={(this.state.value = false)}
                    as={Link}
                    to={this.state.link}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    disabled={(this.state.value = false)}
                    as={Link}
                    to="/Cours"
                  >
                    Teachings
                  </Nav.Link>
                  <Nav.Link
                    disabled={(this.state.value = false)}
                    as={Link}
                    to="/Decouvrir"
                  >
                    Discover
                  </Nav.Link>
                  <Nav.Link
                    disabled={(this.state.value = false)}
                    as={Link}
                    to="/Outils"
                  >
                    Tools
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
            <NavDropdown title={this.state.name} id="basic-langue-nav-dropdown">
              <div>
                <NavDropdown.Item
                  as={Link}
                  to="/"
                  onClick={this.setLangue}
                  onClick={this.setBtnDisable}
                >
                  None
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item
                  as={Link}
                  to="/anglais"
                  onClick={this.setLangueAnglais}
                  onClick={this.setBtnEnable}
                >
                  English
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item
                  as={Link}
                  to="/francais"
                  onClick={this.setLangueFrancais}
                  onClick={this.setBtnEnable}
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
              <Route path="/Exercice" element={<Exercice />}></Route>
              <Route path="/Decouvrir" element={<Decouvrir />}></Route>
              <Route path="/Outils" element={<Outils />}></Route>
              <Route path="/Anglais" element={<Anglais />}></Route>
              <Route path="/Francais" element={<Francais />}></Route>
              <Route path="/Lecon1" element={<Lecon1 />}></Route>
              <Route path="/Exercice1" element={<Exercice1 />}></Route>
              <Route path="/Lecon2" element={<Lecon2 />}></Route>
              <Route path="/Exercice2" element={<Exercice2 />}></Route>
              <Route
                path="/ArticleFootball"
                element={<ArticleFootball />}
              ></Route>
              <Route
                path="/ArticlePeinture"
                element={<ArticlePeinture />}
              ></Route>
            </Routes>
          </div>
        </Router>
      );
    } else if (
      this.state.link === "/francais" &&
      this.state.name === "Francais"
    ) {
      return (
        <Router>
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
              <Navbar.Brand>MEMO`RISE</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link
                    disabled={(this.state.value = false)}
                    as={Link}
                    to={this.state.link}
                  >
                    Accueil
                  </Nav.Link>
                  <Nav.Link
                    disabled={(this.state.value = false)}
                    as={Link}
                    to="/Cours"
                  >
                    Cours
                  </Nav.Link>
                  <Nav.Link
                    disabled={(this.state.value = false)}
                    as={Link}
                    to="/Decouvrir"
                  >
                    Découvrir
                  </Nav.Link>
                  <Nav.Link
                    disabled={(this.state.value = false)}
                    as={Link}
                    to="/Outils"
                  >
                    Outils
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
            <NavDropdown title={this.state.name} id="basic-langue-nav-dropdown">
              <div>
                <NavDropdown.Item
                  as={Link}
                  to="/"
                  onClick={this.setLangue}
                  onClick={this.setBtnDisable}
                >
                  None
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item
                  as={Link}
                  to="/anglais"
                  onClick={this.setLangueAnglais}
                  onClick={this.setBtnEnable}
                >
                  Anglais
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item
                  as={Link}
                  to="/francais"
                  onClick={this.setLangueFrancais}
                  onClick={this.setBtnEnable}
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
              <Route path="/Lecon1" element={<Lecon1 />}></Route>
              <Route path="/Exercice1" element={<Exercice1 />}></Route>
              <Route path="/Lecon2" element={<Lecon2 />}></Route>
              <Route path="/Exercice2" element={<Exercice2 />}></Route>
              <Route
                path="/ArticleFootball"
                element={<ArticleFootball />}
              ></Route>
              <Route
                path="/ArticlePeinture"
                element={<ArticlePeinture />}
              ></Route>
            </Routes>
          </div>
        </Router>
      );
    }
  }
}
