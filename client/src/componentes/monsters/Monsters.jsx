import React, { Component } from "react";
import { render } from "@testing-library/react";

import { CardList } from "./card-list/card-list.component";

class Monsters extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
        };



    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }));
    }

    render() {
        return (
            <div>
        <CardList monsters={this.state.monsters}></CardList>

            </div>
        );
    }
}
export default Monsters;
