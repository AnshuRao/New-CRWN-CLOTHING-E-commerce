//SCSS
import "./cart-item.style.scss";

//Component Start
const CartItem = ({ cartItem }) => {
  const {name, price, imageUrl, quantity} = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />

      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        {quantity} x &#8377;{`${price}`}
      </div>

     
    </div>
  );
};

export default CartItem;
