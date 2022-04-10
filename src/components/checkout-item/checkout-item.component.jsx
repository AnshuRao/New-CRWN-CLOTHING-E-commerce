//SCSS
import "./checkout-item.style.scss";
//Action
import { addItemToCart ,removeItemFromCart ,clearItemFromCart } from "../../store/cart/cart.action";
//Dispatch
import { useDispatch } from "react-redux";
//Selector
import {useSelector} from 'react-redux';
//cartSelector
import {selectCartItems} from '../../store/cart/cart.selector';
//Component Start
const CheckoutItem = ({ cartItem }) => {
 const cartItems = useSelector(selectCartItems);
const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () => {
    return dispatch(clearItemFromCart(cartItems,cartItem));
  };
  const addItemHandler = () => dispatch( addItemToCart(cartItems,cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems,cartItem));
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
      &#9003;
      </div>
    </div>
  );
};

export default CheckoutItem;
