import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";
import currentUserContext from "../../../contexts/current-user.context";
import { selectCurrentUser } from "../../../redux/user/user-selectors";
import {
  checkUserSession,
  setCurrentUser
} from "../../../redux/user/user.actions";
import SingUnSingUpPage from "../components/ds/ds-auth/singin-singup-page/singin-singup-page";
import HeaderComponent from "../components/header/header.component";
import {
  auth,
  getUserProfileDocument
} from "./../components/ds/ds-auth/firebase.utils";
import CheckoutPage from "./check-out-page/check-out-page.component";
import HomePageStore from "./homepage/home-page.component";
import ShopPage from "./shop/shop-page.component";


function StorePageInit({ collectionsArray, history, match }) {
  const currentUser = useSelector(selectCurrentUser);

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
      {currentUser ? (
        <>
          <currentUserContext.Provider>
            <HeaderComponent />
          </currentUserContext.Provider>

          <Route
            exact
            path={`${match.path}`}
            component={() => <HomePageStore />}
          />

          <Route path={`${match.path}/store`} component={ShopPage} />

          <Route path={`${match.path}/checkout`} component={CheckoutPage} />
        </>
      ) : (
        <>
          <Redirect to={`${match.path}/signin`} />
        </>
      )}

      <Route path={`${match.path}/signin`} component={SingUnSingUpPage} />
    </Container>
  );
}

export default withRouter(StorePageInit);
