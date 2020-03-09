import React from "react";
import Navbar from "../navbar/Navbar";

function Layout(props) {
  //const children = props.children;

  return (
    <React.Fragment>
      <Navbar />
      <div>{props.children}</div>
    </React.Fragment>
  );
}

export default Layout;
