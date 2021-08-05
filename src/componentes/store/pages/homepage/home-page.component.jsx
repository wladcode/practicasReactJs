import React from "react";
import DirectoryComponent from "../../components/directory/directory.component";
import "./home-page.scss";

const HomePageStore = ({currentUser}) => {
  return <DirectoryComponent currentUser ={currentUser} />;
};

export default HomePageStore;
