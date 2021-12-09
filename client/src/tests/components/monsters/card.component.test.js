import React from "react";
import { shallow, mount, render } from "enzyme";
import { Card } from "../../../componentes/monsters/card/card.component";
import { it } from "date-fns/locale";

test("Card componente test", () => {
  expect(<Card />).toMatchSnapshot();
});
