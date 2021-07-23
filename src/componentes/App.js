import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import Layout from "./layout/Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import RickAndMortyAPI from "../pages/RickAndMortyApi";
import BagdeEdit from "../pages/BadgeEdit";
import BagdeDetailsContainer from "./badge/badgedetails/BagdeDetailsContainer";
import Monsters2 from "./monsters/Monsters2";
import HomePageStore from "./store/home-page.component";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route
            exact
            path="/badges/:badgeId"
            component={BagdeDetailsContainer}
          />
          <Route exact path="/badges/:badgeId/edit" component={BagdeEdit} />
          <Route exact path="/api" component={RickAndMortyAPI} />
          <Route exact path="/monsters" component={Monsters2} />
          <Route exact path="/store" component={HomePageStore} />

          <Route component={NotFound} />
        </Switch>
      </Layout>

    </BrowserRouter>
  );
}

export default App;
