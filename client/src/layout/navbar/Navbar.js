import React, { Fragment } from "react";

//import logo from "../../images/logo.svg";
import { Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
import "./Navbar.css";

import MenuComponent from "../menu/Menu.component";
import LanguageComponent from "../../componentes/commons/language/Languaje";

function NavbarCustome() {
    return (
        <Navbar className="Navbar navbar-dark bg-dark" expand="none">
            <Link className="Navbar_brand" to="/">
                <Navbar.Brand href="#home">
                    <img className="Navbar_brand-logo" src="https://robohash.org/chamow1?size=50x50" alt="Logo" />
                </Navbar.Brand>
            </Link>
            <div>
                <LanguageComponent />
            </div>
            <Fragment>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2 d-md-none" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-md-none">
                    <MenuComponent />
                </Navbar.Collapse>
            </Fragment>
        </Navbar>
    );
}

//export default withTranslation()(NavbarCustome);
export default NavbarCustome;
