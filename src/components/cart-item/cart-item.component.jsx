//Styled Component
import {CartItemContainer , ItemDetails , Name , Price} from "./cart-item.style";


//Component Start
const CartItem = ({ cartItem }) => {
  const {name, price, imageUrl, quantity} = cartItem;
  

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />

      <ItemDetails>
        <Name>{name}</Name>
        <Price>{price}</Price>
        {quantity} x &#8377;{`${price}`}
      </ItemDetails>
      
    </CartItemContainer>
  );
};

export default CartItem;
