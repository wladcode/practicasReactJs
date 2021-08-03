import React from "react";
import "./Badge.css";

import confLogo from "../../images/badge-header.svg";
import Gravatar from "../gravatar/Gravatar";

class Badge extends React.Component {
  render() {
    
    return (
      <div className='Badge'>
        <div className='Badge_header'>
          <img src={confLogo} alt='Logo Conferencia' />
        </div>

        <div className='Badge_section-name'>
          {/*
          <img
            className='Badge_avatar'
            src='https://www.gravatar.com/avatar?d=robohash'
            alt='Avatar'
          />
          */}


          <Gravatar
            className='Badge_avatar'
            email={this.props.email}
          />

          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className='Badge_section-info'>
        <h3> {this.props.jobTitle}</h3>
        <div> {this.props.email}</div>
        </div>

        <div className='Badge_footer'>pruebita</div>
      </div>
    );
  }
}

export default Badge;
