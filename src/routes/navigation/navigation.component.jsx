//REACT
import { Fragment, useContext } from "react";
//CONTEXT
import { UserContext } from "../../contexts/user.contexts";
import { CartContext } from "../../contexts/cart.context";
//SVG
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
//ROTUER
import { Outlet, Link } from "react-router-dom";

//FIREBASE
import { signOutUserHandler } from "../../utils/firebase/firebase.utils";
//Component Imported
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropDown/cart-dropdown.component";
//STYLED-COMPONENTS
import { NavigationContainer , LogoConatiner, NavLinksContainer,NavLink } from "./navigation.style";

//COMPONENT START
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoConatiner to="/">
          <CrwnLogo className="logo" />
        </LogoConatiner>
        <NavLinksContainer>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUserHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/authentication">
              SIGN IN
            </NavLink>
          )}

          <CartIcon />
        </NavLinksContainer>
        
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
