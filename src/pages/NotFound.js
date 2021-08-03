import React from "react";
import notFoundImg from "../images/notFound.jpg";

function NotFound() {
  return (
    <div>
      <img src={notFoundImg} style={{ height: 500, width:500 }} alt="Página no encontrada" />
    </div>
  );
}

export default NotFound;
