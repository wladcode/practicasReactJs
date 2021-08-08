import React from "react";
import "./collection-item.scss";
import DSButtonComponent from "./../ds/ds-button/ds-button.component";
import { addItemToCart } from "../../../../redux/char/cart-action";
import { connect } from "react-redux";

const CollectionItemComponent = ({ item, addItemToCart }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <DSButtonComponent inverted onClick={() => addItemToCart(item)}>
        Agregar al carrito
      </DSButtonComponent>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (itemToAdd) => dispatch(addItemToCart(itemToAdd)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItemComponent);
