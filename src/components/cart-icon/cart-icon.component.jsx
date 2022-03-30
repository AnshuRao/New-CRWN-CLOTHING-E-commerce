//STYLED COMPONENTS
import{CartIconContainer , ShoppingIcon, ItemsCount} from "./cart-icon.style.jsx";

//REACT
import { useContext } from "react";

//CONTEXT
import { CartContext } from "../../contexts/cart.context";

//Componenet Start
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen , cartCount} = useContext(CartContext);

  const toggleDropdownHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleDropdownHandler}>
      <ShoppingIcon />
      <ItemsCount>{cartCount}</ItemsCount>
    </CartIconContainer>
  );
};

export default CartIcon;
