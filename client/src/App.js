import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/global.styles";

/*
import FirstComponent from "./componentes/FirstComponent";
import FourthComponent from "./componentes/FourthComponent";
import SecondComponent from "./componentes/SecondComponent";
import ThirdComponent from "./componentes/ThirdComponent";
*/
import FormWithFormik from "./pages/formik/FormWithFormik";
import FormWithReact from "./pages/formik/FormWithReact";
import NotFound from "./pages/NotFound";
import FormWithFormikAndYup from "./pages/formik/FormWithFormikAndYup";
import FormWithFormikAndYupHOC from "./pages/formik/FormWithFormikAndYupHOC";
import Layout from "./layout/Layout";

import Geolocation from "./pages/geo/Geolocation";

const HomePage = lazy(() => import("./pages/Home"));

const Badges = lazy(() => import("./pages/Badges"));
const BadgeNew = lazy(() => import("./pages/BadgeNew"));
const BagdeDetailsContainer = lazy(() =>
  import("./componentes/badge/badgedetails/BagdeDetailsContainer")
);
const BagdeEdit = lazy(() => import("./pages/BadgeEdit"));
const RickAndMortyAPI = lazy(() => import("./pages/RickAndMortyApi"));
const MonstersSecond = lazy(() => import("./pages/MonstersSecond"));
const storePageInit = lazy(() =>
  import("./componentes/store/pages/storePageInit")
);

function App() {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <Suspense fallback={<div>..Loading</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/badges" component={Badges} />
            <Route path="/badges/new" component={BadgeNew} />
            <Route path="/badges/:badgeId" component={BagdeDetailsContainer} />
            <Route path="/badges/:badgeId/edit" component={BagdeEdit} />
            <Route path="/api" component={RickAndMortyAPI} />
            <Route path="/monsters" component={MonstersSecond} />
            <Route path="/shop" component={storePageInit} />
            <Route path="/formReact" component={FormWithReact} />
            <Route path="/formFormik" component={FormWithFormik} />
            <Route path="/formFormikYUP" component={FormWithFormikAndYup} />
            <Route path="/geolocation" component={Geolocation} />
            <Route
              path="/formFormikYUPHCO"
              component={FormWithFormikAndYupHOC}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}
/*
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
*/
export default App;
