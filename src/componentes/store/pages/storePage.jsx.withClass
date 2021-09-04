import { Container } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/user-selectors";
import { checkUserSession, setCurrentUser } from "../../../redux/user/user.actions";
import SingUnSingUpPage from "../components/ds/ds-auth/singin-singup-page/singin-singup-page";
import HeaderComponent from "../components/header/header.component";
import {
  auth,
  getUserProfileDocument
} from "./../components/ds/ds-auth/firebase.utils";
import CheckoutPage from "./check-out-page/check-out-page.component";
import HomePageStore from "./homepage/home-page.component";
import ShopPage from "./shop/shop-page.component";



class StorePage extends Component {
  unsuscribeFormAuth = null;

  componentDidMount() {
    console.log("THIS:PRPS ", this.props);

    const { setCurrentUser, collectionsArray , checkUserSession} = this.props;

    //checkUserSession();
    
    this.unsuscribeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
      try {
        const userData = await getUserProfileDocument(userAuth);

        if (userData) {
          setCurrentUser(userData);

          console.log("USER IN PAGE STORE: ", this.state);

          this.props.history.push("/shop");
        } else {
          throw new Error();
        }
      } catch (error) {
        setCurrentUser(null);

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

            <Route
              path={`${this.props.match.path}/store`}
              component={ShopPage}
            />

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
    checkUserSession: () => dispatch(checkUserSession())

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StorePage));
