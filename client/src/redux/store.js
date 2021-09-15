import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

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
sagaMiddleware.run(rootSaga)

//Para uso de localstorage
export const persistor = persistStore(store);

export default { store, persistor };
