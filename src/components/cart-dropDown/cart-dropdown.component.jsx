//SCSS
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItemsContainer,
} from "./cart-dropdown.style";
//Component Imported
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
//REACT
import { useContext } from "react";
//Router-Dom
import { useNavigate } from "react-router-dom";
//CONTEXT
import { CartContext } from "../../contexts/cart.context";

//Component Start
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("./checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
      {
        cartItems.length ? ( cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })) : <EmptyMessage >
          Your Cart Is Empty
        </EmptyMessage>


      }


       
      </CartItemsContainer>
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
