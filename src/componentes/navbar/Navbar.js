import React from "react";

import logo from "../../images/logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className='Navbar'>
        <div className='container-fluid'>
          <Link className='Navbar_brand' to='/'>
            <img className='Navbar_brand-logo' src={logo} alt='Logo' />
            <span className='font-weight-light'>Platzi</span>
            <span className='font-weight-bold'>Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
