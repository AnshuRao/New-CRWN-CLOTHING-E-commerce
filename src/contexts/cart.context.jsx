//REACT
import { createContext, useState, useEffect } from "react";

//adding to cartItems and for increment (HELPER)
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//Removing Item from cartItems and for decrement (HELPER)
const removeCartItem = (cartItems, CartItemToRemove) => {
  /*find the cart item to remove*/
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === CartItemToRemove.id
  );
  /*check if quantity is eqaul to 1 , if it is remove that item from the cartItems */
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== CartItemToRemove.id);
  }
  /*return back cartItems with matching cart item with reduced quantity */
  return cartItems.map((cartItem) =>
    cartItem.id === CartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

//Clear Item (Helper)
const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

//CARTCONTEXT
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  count: 0,
  removeItemToCart: () => {},
  clerItemFromCart: () => {},
  cartTotal: 0,
});
//CART-PROVIDER
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  //adding to cartItems and increment
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  //useEffetc for cartCount dependent on cartItems
  useEffect(() => {
    const count = cartItems
      .map((cartItem) => {
        return cartItem.quantity;
      })
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
    return setCartCount(count);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0);
      setCartTotal(newCartTotal)
  });

  //Removing Item from cartItems and decrement
  const removeItemToCart = (CartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, CartItemToRemove));
  };

  //Clear Item
  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartCount,
    cartItems,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
