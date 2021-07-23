import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from "@material-ui/core";
import React from "react";
import api from "../api/api";
import "./styles/RickAndMortyAPI.css"

class RickAndMortyAPI extends React.Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      results: [],
    },
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    // seteo de primer estado
    this.setState({
      loading: true,
      error: null,
    });

    //cargar datos
    try {
      const response = await api.rickyAndMorti.lisCharacters(
        this.state.nextPage
      );
      console.log("response", response);
      const data = response;

      console.log("data", data);
      this.setState({
        loading: false,
        error: null,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
        nextPage: this.state.nextPage + 1,
      });

      console.log("this.state.data", this.state.data);
    } catch (error) {
      console.log("ERROR: ", error);

      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.error) {
      return <h1>Error al cargar los datos</h1>;
    }

    return (
      <React.Fragment>
        <Container>
          <p>api va el api</p>
          <Grid container spacing={2}>
            {this.state.data.results.map((item) => {
              return (
                <Grid key={item.id} item xs={12} sm={4} md={3} lg={3}>
                  <Card className="card-container">
                    <CardContent>
                      <Typography
                        noWrap
                        gutterBottom
                        variant="h5"
                        color="primary"
                      >
                        {item.name}
                      </Typography>
                      <CardMedia title="character">
                        <img  className="imagen-container" alt="character" src={item.image} />
                      </CardMedia>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default RickAndMortyAPI;
