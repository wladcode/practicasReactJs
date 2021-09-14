import React from "react";
import DirectoryComponent from "../../components/directory/directory.component";
import "./home-page.scss";
import { connect } from "react-redux";
import { HomePageContainer } from "./home-page.styled";

const HomePageStore = () => {
  //throw Error;
  return (
    <HomePageContainer>
      <DirectoryComponent />
    </HomePageContainer>
  );
};

export default HomePageStore;
