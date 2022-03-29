//SCSS
import "./checkout-item.style.scss";
//REACT
import { useContext } from "react";
//CONTEXt
import { CartContext } from "../../contexts/cart.context";

//Component Start
const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () => {
    return clearItemFromCart(cartItem);
  };
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>

      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
