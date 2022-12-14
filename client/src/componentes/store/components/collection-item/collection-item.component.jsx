import React from "react";
import "./collection-item.scss";
import DSButtonComponent from "./../ds/ds-button/ds-button.component";
import { addItemToCart } from "../../../../redux/char/cart-action";
import { connect } from "react-redux";

const CollectionItemComponent = ({ item, dispatch }) => {
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
                <span className="price">${price}</span>
            </div>

            <DSButtonComponent className="custom-button" inverted onClick={() => dispatch(addItemToCart(item))}>
                Agregar al carrito
            </DSButtonComponent>
        </div>
    );
};

/*
SI NO SE SETEA, se pasa la funcion dispatch como propiedad en el componente
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (itemToAdd) => dispatch(addItemToCart(itemToAdd)),
  };
};
*/

export default connect()(CollectionItemComponent);
