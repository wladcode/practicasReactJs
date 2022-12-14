import { shallow } from "enzyme";
import React from "react";
import FirstComponent from "../../componentes/FirstComponent";

test("Testing clic increments", () => {
    const wrapper = shallow(<FirstComponent />);

    wrapper.find('[id="counter"]').simulate("click");
    wrapper.find('[id="counter"]').simulate("click");
    expect(wrapper.state()).toEqual({ counter: 2 });
});
