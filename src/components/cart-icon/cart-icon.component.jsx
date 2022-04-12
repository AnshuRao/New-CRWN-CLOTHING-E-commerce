//STYLED COMPONENTS
import{CartIconContainer , ShoppingIcon, ItemsCount} from "./cart-icon.style.jsx";

//Dispatch
import { useDispatch } from "react-redux";
//Redux-Selctor
import { useSelector } from "react-redux";
//CART-SELCTOR
import {selectCartCount} from '../../store/cart/cart.selector';
//ACTIONS 
import {setIsCartOpen} from '../../store/cart/cart.action';

//Componenet Start
const CartIcon = () => {
  const dispatch = useDispatch();
const cartCount = useSelector(selectCartCount);

  const toggleDropdownHandler = () => {
    dispatch(setIsCartOpen());
  };

  return (
    <CartIconContainer onClick={toggleDropdownHandler}>
      <ShoppingIcon />
      <ItemsCount>{cartCount}</ItemsCount>
    </CartIconContainer>
  );
};

export default CartIcon;
