import {combineReducers} from 'redux';

//USER REDUCER
import { userReducer } from './user/user.reducer';
//CATEGORIES REDUCER
import {categoriesReducer} from './categories/category.reducer';
//Cart REDUCER
import { cartReducer } from './cart/cart.reducer';

//MAIN STATE
 const rootReducer = combineReducers({
user: userReducer,
categories : categoriesReducer,
cart: cartReducer
});
