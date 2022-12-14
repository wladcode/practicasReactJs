import React from "react";

import "./BadgesList.css";
import Gravatar from "../gravatar/Gravatar";
import { Link } from "react-router-dom";

function useSearchBudges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);
  React.useMemo(() => {
    const results = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(results);
  }, [badges, query]);

  return [query, setQuery, filteredBadges];
}

//class BadgesList extends React.Component {
function BadgesList(props) {
  // Se cambiar por funcion porque los hooks solo se usan en componentes funcionales (es decir funciones)
  //render() { no hay metodo render cuando es una funcionF
  const badges = props.badges; // se captura los valores de los props

  /*
  const filteredBadges2 = badges.filter((badge) => {
    //Filtra los badges que sean incluyan al query
    return `${badge.firstName} ${badge.lastName}`
      .toLowerCase()
      .includes(query.toLowerCase());
  });
*/
  const [query, setQuery, filteredBadges] = useSearchBudges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <h3> No existen registros </h3>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label htmlFor="">Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <Link
                to={`/badges/${badge.id}`}
                className="text-reset text-decoraton-none"
              >
                <Gravatar
                  className="BadgesListItem_avatar"
                  email={badge.email}
                />

                <div>
                  <div className="BadgesListNames">
                    {badge.firstName} {badge.lastName}
                  </div>
                  <div className="Twitter_name">
                    <span className="Twitter_logo"></span>@{badge.twitter}
                  </div>
                  <div className="BadgesListJob">{badge.jobTitle}</div>
                  <div className="BadgesListJob">{badge.email}</div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
  //}
}

export default BadgesList;
