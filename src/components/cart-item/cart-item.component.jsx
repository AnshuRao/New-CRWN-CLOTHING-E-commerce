//SCSS
import "./cart-item.style.scss";
//REACT
import { useContext } from "react";
//CONTEXt 
import { CartContext } from "../../contexts/cart.context";


//Component Start
const CartItem = ({ cartItem }) => {
  const {name, price, imageUrl, quantity} = cartItem;
  const {removeItemToCart} = useContext(CartContext);

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />

      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        {quantity} x &#8377;{`${price}`}
      </div>
      <div className="close" onClick={()=>removeItemToCart(cartItem)}>&#10539;</div>
    </div>
  );
};

export default CartItem;
