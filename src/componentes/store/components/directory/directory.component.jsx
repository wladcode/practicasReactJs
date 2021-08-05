import React, { Component } from "react";
import "./directory.scss";
import MenuItemComponent from "./../menu-item/menu-item.component";

import SECTIONS_DATA from "./sections.data";



class DirectoryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItemComponent key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default DirectoryComponent;
