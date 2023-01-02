import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./char/cart-reducer";
import directoryReducer from "./directory/directory-reducer";
import geolocationReducer from "./geolocation/geolocation-reducer";
import { loginReducer } from "./login";
import shopReducer from "./shop/shop-reducer";
import userReducer from "./user/user.reducer";

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
    shop: shopReducer,
    geolocation: geolocationReducer,
    login: loginReducer,
});

export default persistReducer(persistConfig, rootReducer);
