import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./char/cart-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./directory/directory-reducer";
import shopReducer from './shop/shop-reducer';

const persistConfig = {
  key: "root-key",
  storage,
  whitelist: ["cart"],
};
// user es persistido por firebase

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer

});

export default persistReducer(persistConfig, rootReducer);
