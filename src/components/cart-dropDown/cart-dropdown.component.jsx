//SCSS
import './cart-dropdown.style.scss';
//Component Imported
import Button from '../button/button.component';
//REACT
//import { useContext } from 'react';

//CONTEXT
//import {CartContext}  from '../../contexts/cart.context';


//Component Start
const CartDropdown=()=>{

   

    return(
        <div className='cart-dropdown-container'>
        <div className='cart-items'/>
        <Button >GO TO CHECKOUT</Button>


        </div>
    )
}

export default CartDropdown