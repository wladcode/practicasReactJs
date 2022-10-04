import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "./styles/Home.css";
import { Container } from "react-bootstrap";

class Home extends Component {
  render() {
    const { t } = this.props;

    return (
      <Container fluid className="Home">
        <div className="row">
          <div className="Home__col col-12 col-md-4">
            <h1>Practicas React Wladimir López (chamow)</h1>
          </div>

          <div className="Home__col  col-md-8">
            <img src="https://robohash.org/chamow1" alt="Astronauts" />
          </div>
        </div>
      </Container>
    );
  }
}

export default withTranslation()(Home);
