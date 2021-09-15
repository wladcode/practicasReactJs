import React from "react";
import Navbar from "../navbar/Navbar";
import './layout.css';

function Layout(props) {
  //const children = props.children;

  return (
    <React.Fragment>
      <Navbar />
      <div className="content">{props.children}</div>
    </React.Fragment>
  );
}

export default Layout;
