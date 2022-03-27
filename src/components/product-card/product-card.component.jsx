import './product-card.style.scss';
//Component Imported
import Button from '../button/button.component';


//Component Start
const ProductCard =({product})=>{
    const {imageUrl, name, price} = product;
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <spna className='name'>{name}</spna>
                <span className='price'>{price}</span>
            </div>
            
            <Button buttonType='inverted'> Add to cart </Button>

        </div>
    )


}

export default ProductCard;