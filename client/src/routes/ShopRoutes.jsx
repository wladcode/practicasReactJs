import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import SingUnSingUpPage from "../componentes/store/components/ds/ds-auth/singin-singup-page/singin-singup-page";
import HeaderComponent from "../componentes/store/components/header/header.component";
import CheckoutPage from "../componentes/store/pages/check-out-page/check-out-page.component";
import HomePageStore from "../componentes/store/pages/homepage/home-page.component";
import ShopPage from "../componentes/store/pages/shop/shop-page.component";
import currentUserContext from "../contexts/current-user.context";

class ShopRoutes extends Component {
    componentDidMount() {
        this.props.history.push("/shop/signin"); //doing redirect here.
    }
    render() {
        const { hasActiveSession, match } = this.props;
        console.log("properties ", this.props);

        return (
            <Fragment>
                <currentUserContext.Provider>
                    <HeaderComponent />
                </currentUserContext.Provider>

                <Switch>
                    <Route exact path="/shop" component={() => <HomePageStore />} />
                    <Route path="/shop/store" component={ShopPage} />
                    <Route path="/shop/checkout" component={CheckoutPage} />
                    <Route path="/shop/signin" component={SingUnSingUpPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default withRouter(ShopRoutes);
