import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { Component } from "react";

import i18next from "i18next";
import { withTranslation } from "react-i18next";

class LanguageComponent extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    i18next.changeLanguage(event.target.value);
  };

  render() {
    return (
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Idioma</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="es" control={<Radio />} label="Espaniol" />
            <FormControlLabel value="en" control={<Radio />} label="English" />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

export default LanguageComponent;
