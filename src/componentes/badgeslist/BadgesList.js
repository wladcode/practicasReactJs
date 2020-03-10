import React from "react";

import "./BadgesList.css";
import Gravatar from "../gravatar/Gravatar";
import { Link } from "react-router-dom";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3> No existen registros </h3>
        </div>
      );
    }
    return (
      <div>
        <ul className='list-unstyled BadgesList'>
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id} className='BadgesListItem'>
                <Link to={`/badges/${badge.id}/edit`} className="text-reset text-decoraton-none">
                  <Gravatar
                    className='BadgesListItem_avatar'
                    email={badge.email}
                  />

                  <div>
                    <div className='BadgesListNames'>
                      {badge.firstName} {badge.lastName}
                    </div>
                    <div className='Twitter_name'>
                      <span className='Twitter_logo'></span>@{badge.twitter}
                    </div>
                    <div className='BadgesListJob'>{badge.jobTitle}</div>
                    <div className='BadgesListJob'>{badge.email}</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
