//REACT
import { Fragment, useContext } from "react";
//CONTEXT
import { UserContext } from "../../contexts/user.contexts";
import { CartContext } from "../../contexts/cart.context";
//SVG
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
//ROTUER
import { Outlet, Link } from "react-router-dom";
//SCSS
import "./navigation.style.scss";
//FIREBASE
import { signOutUserHandler } from "../../utils/firebase/firebase.utils";
//Component Imported
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropDown/cart-dropdown.component";

//COMPONENT START
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUserHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/authentication">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>
        
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
