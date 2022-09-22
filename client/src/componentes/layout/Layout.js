import React from "react";
import NavbarCustome from "../navbar/Navbar";
import './layout.css';

function Layout(props) {
  //const children = props.children;

  return (
    <React.Fragment>
      <NavbarCustome />
      <div className="content">{props.children}</div>
    </React.Fragment>
  );
}

export default Layout;
