export const UPDATE_SHOP_DATA = "UPDATE_SHOP_DATA";

export const updateShopData = (collectionsMap) => ({
  type: UPDATE_SHOP_DATA,
  payload: collectionsMap,
});
