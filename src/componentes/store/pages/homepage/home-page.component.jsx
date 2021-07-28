import React from "react";
import DirectoryComponent from "../../components/directory/directory.component";
import "./home-page.scss";

const HomePageStore = () => {
  return (
    <div className="homepage">
      <DirectoryComponent />
    </div>
  );
};

export default HomePageStore;
