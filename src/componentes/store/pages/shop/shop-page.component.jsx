import React, { Component } from "react";

import SHOP_DATA from "./shop.data";
import PreviewCollectionComponent from "./../../components/preview/preview.component";
import { Container } from "@material-ui/core";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <Container>
        <div className="shop-page">
          {collections.map(({ id, ...otherCollectionProps }) => (
            <PreviewCollectionComponent key={id} {...otherCollectionProps} />
          ))}
        </div>
      </Container>
    );
  }
}

export default ShopPage;
