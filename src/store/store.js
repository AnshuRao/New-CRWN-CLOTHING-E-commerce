import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
//ROOT-REDUCER
import { rootReducer } from "./root-reducer";
//Redux-Persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//Redux-saga
import createSagaMiddleware from "redux-saga";
//ROOT-SAGA
import { rootSaga } from "./root-saga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart" ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware
].filter(Boolean);


//DEV_TOOL Only for chrome ...to look at the actions and payload
const composeEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const ComposedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  ComposedEnhancers
);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
