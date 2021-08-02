import { Container } from "@material-ui/core";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HeaderComponent from "../components/header/header.component";
import HomePageStore from "./homepage/home-page.component";
import ShopPage from "./shop/shop-page.component";
import SingUnSingUpPage from "./singin-singup-page/singin-singup-page";
import {
  auth,
  createUserProfileDocument,
} from "../../../ds-auth/firebase.utils";

class StorePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsuscribeFormAuth = null;

  componentDidMount() {
    this.unsuscribeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log("USERNEW: ", this.state);
            }
          );
        });
      } else {
        this.setState({
          currentUser: userAuth,
        });
      }

      // console.log("onAuthStateChanged: ", user)
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
          <HeaderComponent currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/store" component={HomePageStore} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SingUnSingUpPage} />
          </Switch>
        </Route>
      </Container>
    );
  }
}

export default StorePage;
