import { Tab, Tabs } from "@material-ui/core";
import React, { Component } from "react";
import SignInComponent from "../sign-in/sign-in.component";
import logoImage from "./diamondSoft.png";
import "./singin-singup.scss";
import SignUpComponent from "./../sign-up/sign.up.component";

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
