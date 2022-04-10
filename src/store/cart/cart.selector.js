import { createSelector } from "reselect";


const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);



/* export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.cartItems
);

export const selectCartCount = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.cartCount
);

export const selectCartTotal = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.cartTotal
);
 */