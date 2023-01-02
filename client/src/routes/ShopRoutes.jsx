import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { auth, getUserProfileDocument } from "../componentes/store/components/ds/ds-auth/firebase.utils";
import SingUnSingUpPage from "../componentes/store/components/ds/ds-auth/singin-singup-page/singin-singup-page";
import HeaderComponent from "../componentes/store/components/header/header.component";
import CheckoutPage from "../componentes/store/pages/check-out-page/check-out-page.component";
import HomePageStore from "../componentes/store/pages/homepage/home-page.component";
import ShopPage from "../componentes/store/pages/shop/shop-page.component";
import currentUserContext from "../contexts/current-user.context";
import { selectCurrentUser } from "../redux/user/user-selectors";
import { setCurrentUser } from "../redux/user/user.actions";

class ShopRoutes extends Component {
    state = {
        unsuscribeFormAuth: null,
    };

    componentDidMount() {
        const { hasActiveSession, match, currentUser, history, dispatch } = this.props;
        console.log("properties ", this.props);

        const unsuscribeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
            try {
                const userData = await getUserProfileDocument(userAuth);

                if (userData) {
                    dispatch(setCurrentUser(userData));

                    console.log("USER IN PAGE STORE: ", currentUser);

                    history.push("/shop");
                } else {
                    throw new Error();
                }
            } catch (error) {
                dispatch(setCurrentUser(null));

                console.log("USER IN PAGE STORE null: ", currentUser);

                history.push("/shop/signin");
            }
        });

        this.setState({ unsuscribeFormAuth: unsuscribeFormAuth });
        /*
        if (!currentUser) {
            history.push("/shop/signin"); //doing redirect here.
        }
        */
    }

    componentWillUnmount() {
        const { unsuscribeFormAuth } = this.state;
        console.log("COMPONENT WILL UNMOUNT");
        unsuscribeFormAuth();
    }

    render() {
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default compose(connect(mapStateToProps), withRouter)(ShopRoutes);
