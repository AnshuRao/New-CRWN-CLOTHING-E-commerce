//SCSS
import './product-card.style.scss';
//Component Imported
import Button from '../button/button.component';

//REACT
import { useContext } from 'react';

//CONTEXT
import { CartContext } from '../../contexts/cart.context';


//Component Start
const ProductCard =({product})=>{


    const {imageUrl, name, price} = product;

    const {addItemToCart ,totalCount } = useContext(CartContext);

    const addProductToCart =async ()=>{
        await addItemToCart(product);
       

    }
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>&#8377;{`${price}`}</span>
            </div>
            
            <Button buttonType='inverted' onClick={addProductToCart}> Add to cart </Button>

        </div>
    )


}

export default ProductCard;