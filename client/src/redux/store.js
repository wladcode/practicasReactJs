import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
//import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga";
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

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

if (process.env.NODE_ENV === "production") {
    console.log = function () {};
}

console.log("middlewares ", middlewares);

const store = createStore(rootReducer, applyMiddleware(...middlewares));

//Inicialización del middleware de saga
console.log("root sagas ", rootSaga);
sagaMiddleware.run(rootSaga);
/*.done.catch((e) => {
  console.error("Error running saga", e);
})
*/

//Para uso de localstorage
const persistor = persistStore(store);

console.log("store ", store);
console.log("history ", history);
export { store, persistor };
