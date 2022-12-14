import React from "react";
import { CardList } from "../../../componentes/monsters/card-list/card-list.component";
import { shallow, mount, render } from "enzyme";

test("CardList componente test", () => {
    const mockRobots = [
        {
            id: 1,
            name: "Wladimir",
            username: "chamow",
            email: "teste@dss.com",
        },
    ];
    expect(shallow(<CardList monsters={mockRobots} />)).toMatchSnapshot();
});
