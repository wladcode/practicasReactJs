import {
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import React, { Component } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./card/card.css";

import { AccountCircle } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import SearchBox from "../commons/search-box/search-box.component";

class Monsters2 extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    console.log("FILTER: ", filterMonsters);
    console.log("STATE: ", this.state);

    return (
      <Container>

        <h1 className="text-title">MONSTER API</h1>

        <SearchBox
          placeholder="Search by names"
          handleChange={this.handleChange}
        />

        <Grid container spacing={2}>
          {filterMonsters.map((monster) => (
            <Grid key={monster.id} item xs={12} sm={4} md={3} lg={3}>
              <Card className="card-container">
                <CardContent>
                  <Typography noWrap gutterBottom variant="h5" color="primary">
                    {monster.name}
                  </Typography>

                  <CardMedia title="monster">
                    <img
                      alt="monster"
                      src={`https://robohash.org/${monster.id}?set=set2&size=100x100`}
                    />
                  </CardMedia>

                  <Typography
                    noWrap
                    variant="body1"
                    color="textPrimary"
                    component="p"
                  >
                    {monster.email}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Alguna otra descripción o texto largo para ver como queda
                  </Typography>
                </CardContent>

                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites" color="primary">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share" color="secondary">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="show more">
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}
export default Monsters2;
