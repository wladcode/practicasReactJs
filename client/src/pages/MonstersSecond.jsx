import React, { Component, Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import SearchBox from '../componentes/commons/search-box/search-box.component';
import { CardCustome } from "../componentes/card/card.component";

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
      console.log("ERROR: ", error);
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
      <Fragment>
        <h1 className="text-title">MONSTER API</h1>

        <SearchBox
          placeholder="Search by names"
          handleChange={this.handleChange}
        />
        <br />
        <br />
        <Container fluid>
          <Row className="justify-content-center align-items-center">
            {filterMonsters.map((monster) => (
              <CardCustome
                key={monster.id}
                id={monster.id}
                name={monster.name}
                email={monster.email}
              />
            ))}
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default MonstersSecond;
