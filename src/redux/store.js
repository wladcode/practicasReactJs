import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import thunk from 'redux-thunk';

const middlewares = [thunk];

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger);
}



if(process.env.NODE_ENV === "production"){
    console.log = function (){};
  } 
  


export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//Para uso de localstorage
export const persistor = persistStore(store);

export default { store, persistor };
