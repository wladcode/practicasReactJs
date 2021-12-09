import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./componentes/layout/Layout";
import GlobalStyle from "./global.styles";
import ErrorBoundary from "./componentes/store/components/error-boundary/error-boundary.component";

import FirstComponent from './componentes/FirstComponent';
import SecondComponent from './componentes/SecondComponent';
import ThirdComponent from './componentes/ThirdComponent';
import FourthComponent from './componentes/FourthComponent';


const HomePage = lazy(() => import("./pages/Home"));

const Badges = lazy(() => import("./pages/Badges"));
const BadgeNew = lazy(() => import("./pages/BadgeNew"));
const BagdeDetailsContainer = lazy(() =>
  import("./componentes/badge/badgedetails/BagdeDetailsContainer")
);
const BagdeEdit = lazy(() => import("./pages/BadgeEdit"));
const RickAndMortyAPI = lazy(() => import("./pages/RickAndMortyApi"));
const MonstersSecond = lazy(() =>
  import("./componentes/monsters/MonstersSecond")
);
const storePageInit = lazy(() =>
  import("./componentes/store/pages/storePageInit")
);



function App() {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<div>..Loading</div>}>
              <Route exact path="/" component={HomePage} />

              <Route path="/badges" component={Badges} />
              <Route path="/badges/new" component={BadgeNew} />
              <Route
                path="/badges/:badgeId"
                component={BagdeDetailsContainer}
              />
              <Route path="/badges/:badgeId/edit" component={BagdeEdit} />
              <Route path="/api" component={RickAndMortyAPI} />
              <Route path="/monsters" component={MonstersSecond} />

              <Route path="/shop" component={storePageInit} />
            </Suspense>
          </ErrorBoundary>

          {/*<Route component={NotFound} />*/}
        </Switch>
      </Layout>
    </div>
  );
}


function LearningComponente() {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
    </div>
  );
}
export default App;
