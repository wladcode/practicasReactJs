import React from "react";

class RickAndMortyAPI extends React.Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      //results:[]
    }
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    // seteo de primer estado
    this.setState({
      loading: true,
      error: null
    });

    //cargar datos
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );

      console.log("response", response);
      const data = await response.json();

      console.log("data", data);
      this.setState({
        loading: false,
        error: null,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        nextPage: this.state.nextPage + 1
      });

      console.log("this.state.data", this.state.data);
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  render() {
    if (this.state.error) {
      return <h1>Error al cargar los datos</h1>;
    }

    return (
      <React.Fragment>
        <p>api va el api</p>
        <ul></ul>
      </React.Fragment>
    );
  }
}

export default RickAndMortyAPI;
