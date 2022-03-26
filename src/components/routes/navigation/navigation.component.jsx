//REACT
import { Fragment } from "react";
//SVG
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
//ROTUER
import { Outlet, Link } from "react-router-dom";
//SCSS
import "./navigation.style.scss";


const Navigation = () => {
 

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
             <Link className="nav-link" to="/authentication">
                AUTHENTICATION
             </Link>
          </div>
          
         </div>
         <Outlet />
     
    </Fragment>
  );
};

export default Navigation;
