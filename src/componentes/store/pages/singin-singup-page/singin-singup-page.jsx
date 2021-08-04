import React, { Component } from "react";
import "./singin-singup.scss";
import SignUpComponent from "./../../components/ds/ds-auth/sign-up/sign.up.component";
import SignInComponent from "../../components/ds/ds-auth/sign-in/sign-in.component";
import { Tab, Tabs } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import SwipeableViews from "react-swipeable-views";
import { TabPanel } from "@material-ui/lab";
import logoImage from './diamondSoft.png'


class SingUnSingUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  handleChangeIndex = (index) => {
    this.setState({
      value: index,
    });
  };

  a11yProps = (index) => {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  };

  render() {
    const { value } = this.state;

    return (
      <div className="sign-in-and-sign-up">
        <div className="login-logup">
          <div className="content">
            <Tabs
              value={value}
              onChange={this.handleChange}
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="icon label tabs example"
            >
              <Tab label="Login" />
              <Tab label="Registro" />
            </Tabs>

            {value === 0 ? <SignInComponent /> : <SignUpComponent />}
          </div>
        </div>

        <div className="login-banner">
          <img src={logoImage} alt="Logo imagen" />
        </div>
      </div>
    );
  }
}

export default SingUnSingUpPage;
