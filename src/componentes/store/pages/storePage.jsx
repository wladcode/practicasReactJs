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
import { selectCurrentUser } from "../../../redux/user/user-selectors";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./check-out-page/check-out-page.component";

class StorePage extends Component {
  unsuscribeFormAuth = null;

  componentDidMount() {
    console.log("THIS:PRPS ", this.props);

    const { setCurrentUser } = this.props;
    this.unsuscribeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await getUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          console.log("USER IN PAGE STORE: ", this.state);

          this.props.history.push("/shop");
        });
      } else {
        setCurrentUser(userAuth);

        console.log("USER IN PAGE STORE null: ", this.state);

        this.props.history.push("/shop/signin");
      }
    });
  }
  componentWillUnmount() {
    console.log("COMPONENT WILL UNMOUNT");
    this.unsuscribeFormAuth();
  }

  render() {
    console.log("THIS:PRPS in render ", this.props.match.path);
    return (
      <Container>
          {this.props.currentUser ? (
            <>
              <HeaderComponent />

              <Route
                exact
                path={`${this.props.match.path}`}
                component={() => <HomePageStore />}
              />

              <Route path={`${this.props.match.path}/store`} component={ShopPage} />

              <Route
                path={`${this.props.match.path}/checkout`}
                component={CheckoutPage}
              />
            </>
          ) : (
            <>
              <Redirect to={`${this.props.match.path}/signin`} />
            </>
          )}

          <Route
            path={`${this.props.match.path}/signin`}
            component={SingUnSingUpPage}
          />
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StorePage));
