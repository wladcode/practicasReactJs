import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from "../pages/NotFound";
import PublicRoutes from "./PublicRoutes";
import ShopRoutes from "./ShopRoutes";

class Routes extends Component {
    render() {
        const { hasActiveSession } = this.props;

        return (
            <Switch>
                <Route path="/shop/:path?">
                    <ShopRoutes />
                </Route>

                <Route>
                    <PublicRoutes />
                </Route>

                <Route path="*" component={NotFound} />
            </Switch>
        );
    }
}

export default Routes;
