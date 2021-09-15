import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_b7a3hFL5nC3qlBCZ6bQACpez00gyMMP52H";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Pago exitoso");
      })
      .catch((error) => {
        console.log("ERROR AL PAGAR: ", error);
        alert("Error al realizar el pago");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="DIAMON-CODE"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
