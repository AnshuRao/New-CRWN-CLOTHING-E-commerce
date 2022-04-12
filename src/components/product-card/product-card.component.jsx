//Styled Components
import {
  ProductCardContainer,
  Name,
  Price,
  Footer,
  ProductsImageAndFootContainer,
} from "./product-card.style.jsx";
//Component Imported
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
//Router-dom
import { useNavigate, useParams } from "react-router-dom";
//Dispatch
import { useDispatch } from "react-redux";
//Selector
import { useSelector } from "react-redux";
//
import { selectCartItems } from "../../store/cart/cart.selector";
//Actions
import { addItemToCart } from "../../store/cart/cart.action";
//Component Start
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { imageUrl, name, price, id } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCartHandler = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <ProductCardContainer>
      <ProductsImageAndFootContainer
        onClick={() => {
          navigate(`/shop/${product.title.toLowerCase()}/${product.id}`);
        }}
      >
        <img src={imageUrl} alt={`${name}`} />
        <Footer>
          <Name>{name}</Name>
          <Price>&#8377;{`${price}`}</Price>
        </Footer>
      </ProductsImageAndFootContainer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCartHandler}
      >
        
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
