import { CART_ACTION_TYPE } from "./cart.type";

//ADD CARTITEMS
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//REMOVE CARTITEMS
const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

//CLEAR CARTITEMS
const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

//ACTIONS

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return { type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: newCartItems };
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return { type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: newCartItems };
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return { type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: newCartItems };
};

export const setIsCartOpen = (boll) => {
  return {
    type: CART_ACTION_TYPE.TOOGLE_DROPDOWN,
    payload: boll,
  };
};

//Other Way to do the same thing
/* 
export const setIsCartIsOpen = () => ({
  type: CART_ACTION_TYPE.TOOGLE_DROPDOWN,
});
export const setCartItemsOnAdd = (productToAdd) => ({
  type: CART_ACTION_TYPE.SET_CART_ITEMS_ON_ADD,
  payload: productToAdd,
});
export const setCartItemsOnRemove = (productToRemove) => ({
  type: CART_ACTION_TYPE.SET_CART_ITEMS_ON_REMOVE,
  payload: productToRemove,
});
export const setCartItemsOnClear = (productToClear) => ({
  type: CART_ACTION_TYPE.SET_CART_ITEMS_ON_CLEAR,
  payload: productToClear,
}); */
