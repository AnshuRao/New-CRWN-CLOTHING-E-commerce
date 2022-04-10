import { CART_ACTION_TYPE } from "./cart.type";


const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPE.TOOGLE_DROPDOWN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    default:
      return state;
  }
};






















/* import {
  addItemToCart,
  removeItemToCart,
  clearItemFromCart,
} from "./cart.utils";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

//Creacting REDUCER
export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.TOOGLE_DROPDOWN:
      return {
        ...state,
        isCartOpen: !(state.isCartOpen),
      };
    case CART_ACTION_TYPE.SET_CART_ITEMS_ON_ADD:
      return {
        ...state,
        ...addItemToCart(state.cartItems, payload),
      };
    case CART_ACTION_TYPE.SET_CART_ITEMS_ON_REMOVE:
      return {
        ...state,
        ...removeItemToCart(state.cartItems, payload),
      };
    case CART_ACTION_TYPE.SET_CART_ITEMS_ON_CLEAR:
      return {
        ...state,
        ...clearItemFromCart(state.cartItems, payload),
      };

    default:
      return state;
  }
};
 */