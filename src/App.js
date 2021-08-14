import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BagdeDetailsContainer from "./componentes/badge/badgedetails/BagdeDetailsContainer";
import Layout from "./componentes/layout/Layout";
import Monsters2 from "./componentes/monsters/Monsters2";
import StorePage from "./componentes/store/pages/storePage";
import BagdeEdit from "./pages/BadgeEdit";
import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RickAndMortyAPI from "./pages/RickAndMortyApi";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/badges" component={Badges} />
        <Route path="/badges/new" component={BadgeNew} />
        <Route path="/badges/:badgeId" component={BagdeDetailsContainer} />
        <Route path="/badges/:badgeId/edit" component={BagdeEdit} />
        <Route path="/api" component={RickAndMortyAPI} />
        <Route path="/monsters" component={Monsters2} />

        <Route path ="/shop" component= {StorePage} />

        {/*<Route component={NotFound} />*/}
      </Switch>
    </Layout>
  );
}

export default App;
