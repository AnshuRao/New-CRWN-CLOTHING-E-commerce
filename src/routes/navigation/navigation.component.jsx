//REACT
import { Fragment } from "react";
//SVG
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
//ROTUER
import { Outlet } from "react-router-dom";
//Component Imported
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropDown/cart-dropdown.component";
//STYLED-COMPONENTS
import {
  NavigationContainer,
  LogoConatiner,
  NavLinksContainer,
  NavLink,
} from "./navigation.style";
//REDUX
import { useSelector } from "react-redux";
//User Selctor
import { selectCurrentUser } from "../../store/user/user.selector";
//Cart selector
import { selectIsCartOpen } from "../../store/cart/cart.selector";
//Dispatch
import { useDispatch } from "react-redux";
//User action
import { signOutStart } from "../../store/user/user.action";

//COMPONENT START
const Navigation = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUserHandler = () => {
    return dispatch(signOutStart());
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoConatiner to="/">
          <CrwnLogo className="logo" />
        </LogoConatiner>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUserHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/authentication">SIGN IN</NavLink>
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
