import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "../../Styles/TopNavBar.css";

import Home from "../../Pages/NavBar/Home";
import Cours from "../../Pages/NavBar/Cours";
import Exercice from "../../Pages/Exos/Exercice1";
import Decouvrir from "../../Pages/NavBar/Decouvrir";
import Outils from "../../Pages/NavBar/Outils";
import Francais from "../../Pages/Langue/Francais";
import Anglais from "../../Pages/Langue/Anglais";
import Lecon1 from "../../Pages/Cours/Lecon1";
import Exercice1 from "../../Pages/Exos/Exercice1";
import Lecon2 from "../../Pages/Cours/Lecon2";
import Exercice2 from "../../Pages/Exos/Exercice2";
import ArticleFootball from "../../Pages/Articles/ArticleFootball";
import ArticlePeinture from "../../Pages/Articles/ArticlePeinture";

export default class TopNavBarDefault extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="/">MEMO`RISE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link disabled={false} as={Link} to={this.props.state.link}>
                  Home
                </Nav.Link>
                <Nav.Link
                  disabled={this.props.state.value}
                  as={Link}
                  to="/Cours"
                >
                  Teachings
                </Nav.Link>
                <Nav.Link
                  disabled={this.props.state.value}
                  as={Link}
                  to="/Decouvrir"
                >
                  Discover
                </Nav.Link>
                <Nav.Link
                  disabled={this.props.state.value}
                  as={Link}
                  to="/Outils"
                >
                  Tools
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <NavDropdown
            title={this.props.state.name}
            id="basic-langue-nav-dropdown"
          >
            <div>
              <NavDropdown.Item
                as={Link}
                to="/"
                onClick={this.props.defaultLangue}
              >
                Default
              </NavDropdown.Item>
            </div>
            <div>
              <NavDropdown.Item
                as={Link}
                to="/anglais"
                onClick={this.props.EnLangue}
              >
                English
              </NavDropdown.Item>
            </div>
            <div>
              <NavDropdown.Item
                as={Link}
                to="/francais"
                onClick={this.props.FrLangue}
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
            <Route
              path="/Anglais"
              element={
                <Anglais
                  BtnDisable={this.props.BtnDisable}
                  BtnEnable={this.props.BtnEnable}
                />
              }
            ></Route>
            <Route
              path="/Francais"
              element={
                <Francais
                  BtnDisable={this.props.BtnDisable}
                  BtnEnable={this.props.BtnEnable}
                />
              }
            ></Route>
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
