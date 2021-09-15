import React, { Profiler } from "react";
import DirectoryComponent from "../../components/directory/directory.component";
import "./home-page.scss";
import { HomePageContainer } from "./home-page.styled";

const HomePageStore = () => {
  //throw Error;
  return (
    <HomePageContainer>
      <Profiler
        id="directory"
        onRender={(id, phase, actualDuration) => {
          console.log({
            id,
            phase,
            actualDuration,
          });
        }}
      >
        <DirectoryComponent />
      </Profiler>
    </HomePageContainer>
  );
};

export default HomePageStore;
