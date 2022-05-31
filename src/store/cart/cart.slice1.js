import { createSlice } from "@reduxjs/toolkit";
//utils1
import { addCartItem, removeCartItem, clearCartItem } from "./cart.utils1";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart: (state, action) => {
      console.log(action.payload);
      const { cartItems, product } = action.payload;
      const newCartItems = addCartItem(cartItems, product);
      console.log(newCartItems)
      state.cartItems = newCartItems;
    },
    removeItemFromCart : (state,action)=>{
        const { cartItems,cartItem } = action.payload;
        const newCartItems = removeCartItem(cartItems,cartItem);
        state.cartItems = newCartItems;
    },
    clearItemFromCart : (state, action)=>{
        const { cartItems,cartItem } = action.payload;
        const newCartItems = clearCartItem(cartItems,cartItem);
        state.cartItems = newCartItems;
    },
    setIsCartOpen : (state, action)=>{
        state.isCartOpen = !state.isCartOpen
    },
    clearFullCartAfterPayment : (state, action)=>{
      state.cartItems = []
    }
  },
});

export const { addItemToCart ,removeItemFromCart,clearItemFromCart,setIsCartOpen, clearFullCartAfterPayment } = cartSlice.actions;

export default cartSlice.reducer
