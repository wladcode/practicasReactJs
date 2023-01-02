import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { auth, getUserProfileDocument } from "../componentes/store/components/ds/ds-auth/firebase.utils";
import SingUnSingUpPage from "../componentes/store/components/ds/ds-auth/singin-singup-page/singin-singup-page";
import ErrorBoundary from "../componentes/store/components/error-boundary/error-boundary.component";
import HeaderComponent from "../componentes/store/components/header/header.component";
import CheckoutPage from "../componentes/store/pages/check-out-page/check-out-page.component";
import HomePageStore from "../componentes/store/pages/homepage/home-page.component";
import ShopPage from "../componentes/store/pages/shop/shop-page.component";
import { themes } from "../componentes/store/utils/context/context";
import currentUserContext from "../contexts/current-user.context";
import { selectCurrentUser } from "../redux/user/user-selectors";
import { checkUserSession, setCurrentUser } from "../redux/user/user.actions";

function StoreRoutes({ collectionsArray, history, match }) {
    const currentUser = useSelector(selectCurrentUser);

    const [theme, setTheme] = useState(themes.light);

    const handleChangeTheme = () => {
        console.log(theme);
        setTheme(() => {
            return theme === themes.dark ? themes.light : themes.dark;
        });
    };

    const dispatch = useDispatch();

    useEffect(() => {
        //checkUserSessionHandler();
        dispatch(checkUserSession());

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

        //Clean up function
        return () => {
            console.log("COMPONENT WILL UNMOUNT");
            unsuscribeFormAuth();
        };
    }, [dispatch]);

    return (
        <Container>
            <ErrorBoundary>
                <Switch>
                    {currentUser ? (
                        <>
                            <currentUserContext.Provider>
                                <HeaderComponent />
                            </currentUserContext.Provider>
                            <Route exact path={`/shop`} component={() => <HomePageStore />} />
                            <Route path={`/shop/store`} component={ShopPage} />
                            <Route path={`/shop/checkout`} component={CheckoutPage} />
                            <Route path={`/shop/signin`} component={SingUnSingUpPage} />
                        </>
                    ) : (
                        <>
                            <Redirect to={`/shop/signin`} />
                        </>
                    )}
                </Switch>
            </ErrorBoundary>
        </Container>
    );
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(StoreRoutes);
