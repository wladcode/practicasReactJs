//import SHOP_DATE from "./shop.data";
import { SHOP_DATA_ERROR, SHOP_DATA_START, SHOP_DATA_SUCCESS } from "./shop-actions";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_DATA_START:
      return {
        ...state,
        isFetching: true,
      };

    case SHOP_DATA_SUCCESS:
      return {
        ...state,
        isFetching:false,
        collections: action.payload,
      };

      case SHOP_DATA_ERROR:
        return {
          ...state,
          isFetching:false,
          errorMessage : action.payload

        }
    default:
      return state;
  }
};

export default shopReducer;
