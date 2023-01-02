import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../layout/Layout";

const Badges = lazy(() => import("../pages/Badges"));
const BadgeNew = lazy(() => import("../pages/BadgeNew"));
const BagdeDetailsContainer = lazy(() => import("../componentes/badge/badgedetails/BagdeDetailsContainer"));
const BagdeEdit = lazy(() => import("../pages/BadgeEdit"));
const RickAndMortyAPI = lazy(() => import("../pages/RickAndMortyApi"));
const MonstersSecond = lazy(() => import("../pages/MonstersSecond"));
const HomePage = lazy(() => import("../pages/Home"));

import FormWithFormik from "../pages/formik/FormWithFormik";
import FormWithFormikAndYup from "../pages/formik/FormWithFormikAndYup";
import FormWithFormikAndYupHOC from "../pages/formik/FormWithFormikAndYupHOC";
import FormWithReact from "../pages/formik/FormWithReact";
import Geolocation from "../pages/geo/Geolocation";

export default function PublicRoutes() {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path={`/badges`} component={Badges} />
                <Route path="/badges/new" component={BadgeNew} />
                <Route path="/badges/:badgeId" component={BagdeDetailsContainer} />
                <Route path="/badges/:badgeId/edit" component={BagdeEdit} />
                <Route path="/api" component={RickAndMortyAPI} />
                <Route path="/monsters" component={MonstersSecond} />
                <Route path="/formReact" component={FormWithReact} />
                <Route path="/formFormik" component={FormWithFormik} />
                <Route path="/formFormikYUP" component={FormWithFormikAndYup} />
                <Route path="/geolocation" component={Geolocation} />
                <Route path="/formFormikYUPHCO" component={FormWithFormikAndYupHOC} />
            </Switch>
        </Layout>
    );
}
