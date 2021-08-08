import React from "react";
import "./ds-alert.scss";

import {ReactComponent as AlertWarning} from '../../../../../assets/alerts/alert-warning.svg'

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
