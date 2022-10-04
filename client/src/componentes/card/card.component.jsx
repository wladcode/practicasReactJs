import { IconButton, Typography } from "@mui/material";
import React from "react";
import "./card.css";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

export const CardCustome = ({ name, email, id }) => {
  return (
    <div className="card-monster-container m-2">
      <Typography noWrap gutterBottom variant="h5" color="primary">
        {name}
      </Typography>
      <div className="card-monster-content">
        <div className="card-monster-media-text">
          <img
            alt="monster"
            className="card-monster-image"
            src={`https://robohash.org/${id}?set=set2&size=100x100`}
          />
          <p className="card-monster-text">{email}</p>
        </div>

        <p className="card-monster-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          cumque pariatur impedit accusantium amet mollitia ad unde, qui
          praesentium excepturi architecto temporibus quasi facilis ab quos cum
          incidunt maxime dignissimos.
        </p>
      </div>

      <div disableSpacing className="card-monster-actions">
        <IconButton aria-label="add to favorites" color="primary">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" color="secondary">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};
