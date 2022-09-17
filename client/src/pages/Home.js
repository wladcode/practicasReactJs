import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import { withTranslation } from "react-i18next";

class Home extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <h1>Practicas React Wladimir López (chamow)</h1>
              <Link className="btn btn-primary" to="/badges">
                Start
              </Link>
              <Link className="btn btn-secondary" to="/api">
                {t("main.menu.rm")}
              </Link>

              <Link className="btn btn-secondary" to="/monsters">
                {t("main.menu.monsters")}
              </Link>

              <Link className="btn btn-secondary" to="/shop">
                {t("main.menu.shop")}
              </Link>

              <Link className="btn btn-secondary" to="/formReact">
                {t("main.menu.react")}
              </Link>

              <Link className="btn btn-secondary" to="/formFormik">
                {t("main.menu.formik")}
              </Link>

              <Link className="btn btn-secondary" to="/formFormikYUP">
                {t("main.menu.formikYup")}
              </Link>

              <Link className="btn btn-secondary" to="/formFormikYUPHCO">
                {t("main.menu.formikYupHCO")}
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

export default withTranslation()(Home);
