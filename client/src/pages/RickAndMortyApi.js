import {
  Card,
  CardContent,
  CardMedia, Typography
} from "@material-ui/core";
import React, { Component, Fragment } from "react";
import api from "../api/api";
import "./styles/RickAndMortyAPI.css";

import { Col, Container, Row } from "react-bootstrap";
import PageError from "../componentes/pageerror/PageError";
import PageLoading from "../componentes/pageloading/PageLoading";

import Pagination from '@mui/material/Pagination';


class RickAndMortyAPI extends Component {
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
    console.log("this.state ", this.state);
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
      console.log("ANTES DE CONSULTAR: ", this.state);
      const response = await api.rickyAndMorti.lisCharacters(
        this.state.pagination.current
      );
      console.log("response SERVICE", response);
      const data = response;

      console.log("data", data);
      this.setState({
        ...this.state,
        loading: false,
        error: null,
        data: {
          info: data.info,
          results: data.results,
          //results: [].concat(this.state.data.results, data.results),
        },
        ...this.state.pagination,
        pagination: {
          last: data.info.pages,
          current: this.state.pagination.current,
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

  changePagination = async (event, value) => {
    console.log("CLIC: ", value);
    /*
    this.setState({
      ...this.state.pagination,
      current: value,
    });*/

    //this.state.pagination.current = value;

    await this.setState({
      ...this.state.pagination,
      pagination: { current: value },
    });

    console.log("this.state", this.state);
    await this.fetchCharacters();
  };

  render() {
    return (
      <Fragment>
        <Row>
          <Col>
            <Pagination
              color="primary"
              size="large"
              count={this.state.pagination.last}
              showFirstButton
              showLastButton
              onChange={this.changePagination}
              disabled={this.state.loading}
            />
          </Col>
        </Row>

        <Col>
          <Row>
            <PageLoading show={this.state.loading} />
            {this.state.error && <PageError error={this.state.error} />}

            <Container container spacing={2}>
              <Row>
                {this.state.data.results.map((item) => {
                  return (
                    <Col key={item.id} item xs={12} sm={6} md={4} lg={3}>
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
                              className="card-imagen"
                              alt="character"
                              src={item.image}
                            />
                          </CardMedia>
                        </CardContent>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </Row>
        </Col>
      </Fragment>
    );
  }
}

export default RickAndMortyAPI;
