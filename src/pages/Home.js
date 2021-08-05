import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";


export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              

              <h1>Practicas React</h1>
              <Link className="btn btn-primary" to="/badges">
                Start
              </Link>
              <Link className="btn btn-secondary" to="/api">
                Ricky And Morty Api
              </Link>

              <Link className="btn btn-secondary" to="/monsters">
                Monsters
              </Link>

              <Link className="btn btn-secondary" to="/shopping">
                STORE
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src="https://robohash.org/chamow1"
                alt="Astronauts"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
