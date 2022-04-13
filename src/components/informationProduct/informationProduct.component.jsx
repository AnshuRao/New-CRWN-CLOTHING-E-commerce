//Cart action
import { addItemToCart } from "../../store/cart/cart.action";
// Cart Selector
import { selectCartItems } from "../../store/cart/cart.selector";
//Dispatch
import { useDispatch } from "react-redux";
//Selector
import { useSelector } from "react-redux";
//Styled-Component
import Button from "../button/button.component";
import {
  InfromationMainContainer,
  ProductImageContainer,
  Details,
  About,
} from "./informationProduct.style";

//component Start
const InformationProduct = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const { imageUrl, name, price } = product;

  const AddToCartHandler = () => {
    return dispatch(addItemToCart(cartItems, product));
  };

  return (
    <InfromationMainContainer>
      <ProductImageContainer>
        <img src={imageUrl} alt={name} />
      </ProductImageContainer>

      <Details>
        <h2>{name}</h2>
        <p> &copy; Branded Crwn Product</p>
        <p className="rating">
          Rating &nbsp; &nbsp;
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
        </p>
        <div className="product-price">
          <h1>
            &nbsp;<i class="fa fa-inr" aria-hidden="true"></i> {price}00{" "}
          </h1>
          <Button onClick={AddToCartHandler}> Add to Cart</Button>
        </div>
      </Details>
      <About className="about">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet
          feugiat tortor, at tincidunt sem facilisis eu. Nunc id ipsum in leo
          tempus scelerisque non ut tortor. Sed eu pulvinar ligula, nec
          dignissim tortor. Curabitur commodo dui ac fringilla laoreet. Quisque
          elementum vitae tortor ac viverra. Nam non bibendum diam, sit amet
          elementum orci. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Sed tincidunt massa sit amet
          mauris blandit, ut sodales eros ornare. Morbi varius, ante in laoreet
          semper, risus erat elementum leo, ut convallis felis mauris sagittis
          ipsum.
        </p>
      </About>
    </InfromationMainContainer>
  );
};

export default InformationProduct;
