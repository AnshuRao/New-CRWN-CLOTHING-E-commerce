//SCSS
import "./cart-dropdown.style.scss";
//Component Imported
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
//REACT
import { useContext } from "react";

//CONTEXT
import { CartContext } from "../../contexts/cart.context";

//Component Start
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(  (item) => {
         return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
