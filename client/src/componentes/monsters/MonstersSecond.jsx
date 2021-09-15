import {
  CardActions,
  CardContent, CardMedia,
  Container,
  Grid,
  IconButton, Typography
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import React, { Component } from "react";
import SearchBox from "../commons/search-box/search-box.component";
import "./card/card.css";


class MonstersSecond extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log("RESPOSNE: ", response);
      const monsters = await response.json();
      console.log("MONSTERS: ", monsters);
      this.setState({ monsters: monsters });
    } catch (error) {
      console.log("ERROR: ", error)
    }
  };

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
export default MonstersSecond;
