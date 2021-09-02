import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { fetchCollectionsStart } from "./shop/shop.sagas";

/*
Middleware con thunk
const middlewares = [thunk];
*/

/*
Middleware con saga
*/
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger);
}



if(process.env.NODE_ENV === "production"){
    console.log = function (){};
  } 
  


export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//Inicialización del middleware de saga
sagaMiddleware.run(fetchCollectionsStart)

//Para uso de localstorage
export const persistor = persistStore(store);

export default { store, persistor };
