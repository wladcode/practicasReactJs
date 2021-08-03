import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import api from "../api/api";
import "./styles/RickAndMortyAPI.css";

import Pagination from "@material-ui/lab/Pagination";
import PageError from "../componentes/pageerror/PageError";
import PageLoading from "../componentes/pageloading/PageLoading";

class RickAndMortyAPI extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {
      results: [],
    },
    pagination: {
      current: 1,
      last: 100,
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
        this.state.pagination.current
      );
      console.log("response", response);
      const data = response;

      console.log("data", data);
      this.setState({
        loading: false,
        error: null,
        data: {
          info: data.info,
          results: data.results,
          //results: [].concat(this.state.data.results, data.results),
        },
        pagination: {
          last: data.info.pages,
        },
      });

      console.log("this.state", this.state);
    } catch (error) {
      console.log("ERROR: ", error);

      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  changePagination = (event, value) => {
    console.log("CLIC: ", value);
    this.setState({
      pagination :{
        current :value
      }
    })
    //this.state.pagination.current = value;

    console.log("this.state", this.state);
    this.fetchCharacters();
  };

  render() {
    return (
      <Container>
        <Pagination
          color="primary"
          size="large"
          count={this.state.pagination.last}
          showFirstButton
          showLastButton
          onChange={this.changePagination}
          disabled={this.state.loading}
        />

        {this.state.loading && <PageLoading />}
        {this.state.error && <PageError error={this.state.error} />}

        {!this.state.loading  &&
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
                        <img
                          className="imagen-container"
                          alt="character"
                          src={item.image}
                        />
                      </CardMedia>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        }
      </Container>
    );
  }
}

export default RickAndMortyAPI;
