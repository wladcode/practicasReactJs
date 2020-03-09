import React from "react";

import "./BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <div>
        <ul className='list-unstyled BadgesList'>
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id} className='BadgesListItem'>
                <img
                  src={badge.avatarUrl}
                  alt='Logo'
                  className='BadgesListItem_avatar'
                />
                <div>
                  <div className='BadgesListNames'>
                    {badge.firstName} {badge.lastName}
                  </div>
                  <div className='Twitter_name'>
                    <span className='Twitter_logo'></span>@{badge.twitter}
                  </div>
                  <div className='BadgesListJob'>{badge.jobTitle}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
