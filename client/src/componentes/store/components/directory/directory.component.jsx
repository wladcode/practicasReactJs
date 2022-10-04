import React from "react";
import MenuItemComponent from "./../menu-item/menu-item.component";
import "./directory.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "./../../../../redux/directory/directory-selectors";

const DirectoryComponent = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItemComponent key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(DirectoryComponent);
