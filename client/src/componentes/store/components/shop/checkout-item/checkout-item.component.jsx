import React from "react";
import "./checkout-item.scss";
import { connect } from "react-redux";
import { removeItemFromCart, removeItemQuantity, addItemToCart } from "../../../../../redux/char/cart-action";

const CheckOutItem = ({ cartItem, dispatch }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <div className="arrow" onClick={() => dispatch(removeItemQuantity(cartItem))}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => dispatch(addItemToCart(cartItem))}>
                    &#10095;
                </div>
            </div>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => dispatch(removeItemFromCart(cartItem))}>
                &#10060;
            </div>
        </div>
    );
};

/*
SI NO SE SETEA, se pasa la funcion dispatch como propiedad en el componente
const mapDispatchToProps = (dispacth) => {
  return {
    removeItemFromCart: (item) => dispacth(removeItemFromCart(item)),
    addItemToCart: (item) => dispacth(addItemToCart(item)),
    removeItemQuantity: (item) => dispacth(removeItemQuantity(item)),
  };
};

export default connect(null, mapDispatchToProps)(CheckOutItem);
*/

export default connect()(CheckOutItem);
