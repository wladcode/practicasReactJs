import { Container } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import HeaderComponent from "../components/header/header.component";
import HomePageStore from "./homepage/home-page.component";
import ShopPage from "./shop/shop-page.component";
import SingUnSingUpPage from './singin-singup-page/singin-singup-page';

const StorePage = (props) => {
  return (
    <Container>
      <Route {...props}>
        <HeaderComponent />
        <Switch>
          <Route exact path="/store" component={HomePageStore} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SingUnSingUpPage} />
        </Switch>
      </Route>
    </Container>
  );
};

export default StorePage;
