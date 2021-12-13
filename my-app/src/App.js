import React from "react";

import "./App.css";

import TopNavBar from "./Components/TopNavBar";
import Footer from "./Components/Footer";
import PopUp from "./Components/PopUp";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <PopUp />
        <div id="page-container">
          <div id="content-wrap">
            <TopNavBar />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

/*
 *npm install react-router-dom
 *npm install react-bootstrap
 *npm install
 */
