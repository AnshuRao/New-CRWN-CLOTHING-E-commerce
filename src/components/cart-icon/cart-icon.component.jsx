//SCSS
import "./cart-icon.style.scss";
//SVG
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
//REACT
import { useContext } from "react";

//CONTEXT
import { CartContext } from "../../contexts/cart.context";

//Componenet Start
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleDropdownHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleDropdownHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
