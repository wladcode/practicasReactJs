import React from "react";
import "./ds-alert.scss";


const DSAlert = ({ type, message }) => {
  return (
    <div className={`alert-${type}`}>
      <div className={`alert-icon-${type}`}>
          <div className="img"></div>

      </div>
      <span className="alert-message">{message}</span>
    </div>
  );
};

export default DSAlert;
