import React from "react";
import DSButtonComponent from "./../ds/ds-button/ds-button.component";
import "./collection-item.scss";

const CollectionItemComponent = ({ item, addItem }) => {
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

      <DSButtonComponent
        className="custom-button"
        inverted
        onClick={() => addItem(item)}
      >
        Agregar al carrito
      </DSButtonComponent>
    </div>
  );
};

/*
CON REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (itemToAdd) => dispatch(addItemToCart(itemToAdd)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItemComponent);
*/

//Con graphql
export default CollectionItemComponent;
