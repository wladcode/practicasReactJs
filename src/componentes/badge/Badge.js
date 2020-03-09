import React from "react";
import "./Badge.css";

import confLogo from "../../images/badge-header.svg";

class Badge extends React.Component {
  render() {

    
    const firstName = "Wladimir";
    const lastName = "López";

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
          <img
            className='Badge_avatar'
            src={this.props.avatarUrl}
            alt='Avatar'
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
