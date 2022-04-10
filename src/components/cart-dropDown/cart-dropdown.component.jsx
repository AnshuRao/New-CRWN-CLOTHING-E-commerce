//SCSS
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItemsContainer,
} from "./cart-dropdown.style";
//Component Imported
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

//Router-Dom
import { useNavigate } from "react-router-dom";
//Redux-Selctor
import { useSelector } from "react-redux";
//Cart-Selector
import { selectCartItems } from "../../store/cart/cart.selector";
//Dispatch
import { useDispatch } from "react-redux";
//Actions
import { setIsCartOpen } from "../../store/cart/cart.action";
//Component Start
const CartDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const cartItems = useSelector(selectCartItems);
  

  const goToCheckOutHandler = () => {
    navigate("./checkout");
    dispatch(setIsCartOpen());
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <EmptyMessage>Your Cart Is Empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
