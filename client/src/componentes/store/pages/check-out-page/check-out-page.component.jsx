import React from "react";

import "./check-out.scss";

import { connect } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../../../redux/char/cart-selectors";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "./../../components/shop/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe/stripe-button.component";

const CheckoutPage = ({ cartItems, totalCart }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>

                <div className="header-block">
                    <span>Description</span>
                </div>

                <div className="header-block">
                    <span>Quantity</span>
                </div>

                <div className="header-block">
                    <span>Price</span>
                </div>

                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map((item) => {
                return <CheckOutItem key={item.id} cartItem={item} />;
            })}
            <div className="total">
                <StripeCheckoutButton price={totalCart} /> <span>TOTAL: {totalCart}</span>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalCart: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
