export const addItemsToCartUtil = (cartItems, cartItemToAdd) => {

    console.log("cartItems", cartItems);
  // Se busca si existe el cartItem
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );

  // Si existe se itera el array hasta encontrar el existente y se suma la cantidad, no hay cambios para el resto de items
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  //Si no existe, se agrega el nuevo item al array con la cantidad inicial de 1

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
