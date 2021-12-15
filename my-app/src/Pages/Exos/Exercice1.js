import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Exercice.css";

export default class Exercice1 extends Component {
  render() {
    return (
      <div>
        {/*<div id="LienExo">
          <Link
            id="TitleLien"
            href="https://learningapps.org/tools/904/30/watch?id=p5y5yzru516"
          >
            LIEN
          </Link>
        </div>*/}
        <object
          type="text/html"
          id="Exercice"
          data="https://learningapps.org/tools/904/30/watch?id=p5y5yzru516"
        >
          Memory
        </object>
      </div>
    );
  }
}
