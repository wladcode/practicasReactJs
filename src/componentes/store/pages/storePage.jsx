import { Container } from "@material-ui/core";
import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SingUnSingUpPage from "../components/ds/ds-auth/singin-singup-page/singin-singup-page";
import HeaderComponent from "../components/header/header.component";
import {
  auth,
  getUserProfileDocument,
} from "./../components/ds/ds-auth/firebase.utils";
import HomePageStore from "./homepage/home-page.component";
import ShopPage from "./shop/shop-page.component";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "../../../redux/user/user.actions";

class StorePage extends Component {
  unsuscribeFormAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsuscribeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await getUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log("USER IN PAGE STORE: ", this.state);

          this.props.history.push("/shopping");
        });
      } else {
        setCurrentUser({
          currentUser: userAuth,
        });

        console.log("USER IN PAGE STORE null: ", this.state);

        this.props.history.push("/signin");
      }
    });
  }
  componentWillUnmount() {
    console.log("COMPONENT WILL UNMOUNT");
    this.unsuscribeFormAuth();
  }

  render() {
    return (
      <Container>
        <Route {...this.props}>
          <HeaderComponent />
          <Route exact path="/signin" component={SingUnSingUpPage} />

          <Route
            exact
            path="/shopping"
            component={() => (
              <HomePageStore />
            )}
          />
          {/*
          currentUser ? (
            <>
              <Route exact path="/shop" component={ShopPage} />
            </>
          ) : (
            <>
              <Redirect to="signin" />
            </>
          )*/}
        </Route>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(withRouter(StorePage));
