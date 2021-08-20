//import SHOP_DATE from "./shop.data";
import { UPDATE_SHOP_DATA } from './shop-actions';

const INITIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SHOP_DATA:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }

};

export default shopReducer;