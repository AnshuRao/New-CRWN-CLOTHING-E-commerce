//ON_ADD
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
 return updateCartItemsReducerc(newCartItems);
};
//ON-Remove
export const removeItemToCart = (cartItems, CartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, CartItemToRemove);
 return updateCartItemsReducerc(newCartItems);
};
//ON-Clear
export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
 return updateCartItemsReducerc(newCartItems);
};

//Helper Functions

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

//Main Function
const updateCartItemsReducerc = (newCartItems) => {
  const cartCount = newCartItems
    .map((cartItem) => {
      return cartItem.quantity;
    })
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

  const cartTotal = newCartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );
  return {
    cartItems: newCartItems,
    cartCount,
    cartTotal,
  };
};
