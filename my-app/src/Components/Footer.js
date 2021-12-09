import { Component } from "react";
import { Button } from "react-bootstrap";

import "../Styles/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <p>Abonnez vous pour recevoir les nouveautées</p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Adresse Email"
            />
            <Button variant="outline-success" className="footer-Button">
              S'abonner
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
