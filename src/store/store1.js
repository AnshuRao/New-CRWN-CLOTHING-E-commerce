import { configureStore } from "@reduxjs/toolkit";
//reducers
import CategoriesReducer from '../store/categories/categories.slice';
import UserReducer from "./user/user.slice";
import CartReducer  from "./cart/cart.slice1";
//middlewares
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
//RootSaga
import { rootSaga1 } from "./root-saga1";
//persister
import { combineReducers } from "redux";
import { persistReducer , persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
//import { getDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const sagaMiddleware = createSagaMiddleware();
const middlewareArray = [   process.env.NODE_ENV !== 'production' && logger , sagaMiddleware ]

const rootReducers = combineReducers({
    categories : CategoriesReducer,
    cart : CartReducer,
    user : UserReducer
});
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart" ],
  };
const persistedReducer = persistReducer( persistConfig, rootReducers);

 const store1 = configureStore(
     {
         reducer : persistedReducer,
         middleware:(getDefaultMiddleware)=>   getDefaultMiddleware({  
            serializableCheck: false,
          }).concat(middlewareArray)
      
               
     }
 );

sagaMiddleware.run(rootSaga1);
export const persistor = persistStore(store1);

 export default store1; 