import React from "react";
import notFoundImg from "../images/notFound.jpg";

function NotFound() {
  return (
    <div>
      <img src={notFoundImg} style={{ height: 500, width:500 }} />
    </div>
  );
}

export default NotFound;
