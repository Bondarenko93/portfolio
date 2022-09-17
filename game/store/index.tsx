// import {
//     legacy_createStore as createStore,
//     applyMiddleware
// } from "redux";
import { configureStore } from '@reduxjs/toolkit'

import createSagaMiddleware from "redux-saga";
import gameReducer from "./reducers";
import watcherSagas from "./sagas";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: { gameReducer },
    middleware: [sagaMiddleware]
}
);

sagaMiddleware.run(watcherSagas);
export default store;