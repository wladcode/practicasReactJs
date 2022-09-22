import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { Component, Fragment } from "react";

import i18next from "i18next";
import { withTranslation } from "react-i18next";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";

class LanguageComponent extends Component {
  state = {
    value: "",
  };

  handleChange = (value) => {
    console.log(value);
    this.setState({ value: value });
    i18next.changeLanguage(value);
  };

  render() {
    return (
      <Fragment>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Idioma
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as="button" onClick={(e) => this.handleChange("es")}>
              Espa;ol
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={(e) => this.handleChange("en")}>
              Ingles
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Fragment>
    );
  }
}

export default LanguageComponent;
