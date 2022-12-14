import React, { Fragment } from "react";
import MenuItemComponent from "./../menu-item/menu-item.component";
import "./directory.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "./../../../../redux/directory/directory-selectors";

const DirectoryComponent = ({ sections }) => {
    const renderSections = () => {
        console.log("SECTIONS ", sections);

        let smallSections = sections.filter((item) => item.size === "small" || item.size === undefined);

        let largeSections = sections.filter((item) => item.size === "large");

        return (
            <div className="directory-menu">
                <div className="directory-row">
                    {smallSections.map(({ id, ...otherSectionProps }) => (
                        <MenuItemComponent key={id} {...otherSectionProps} />
                    ))}
                </div>
                <div className="directory-row">
                    {largeSections.map(({ id, ...otherSectionProps }) => (
                        <MenuItemComponent key={id} {...otherSectionProps} />
                    ))}
                </div>
            </div>
        );
    };

    return <Fragment>{renderSections()}</Fragment>;
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection,
});

export default connect(mapStateToProps)(DirectoryComponent);
