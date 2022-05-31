//React
import { useEffect } from "react";

//COMPONENTS Imported
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authantication/Authentication.component.";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

//ROUTER
import { Routes, Route } from "react-router-dom";
//ACTION
import { checkUserSession } from "./store/user/user.slice";
//REDUX
import { useDispatch } from "react-redux";
//selector
import { useSelector } from "react-redux";
//user selector
import { selectCurrentUser } from "./store/user/user.selector";
//HOC
import withRedirect from "./routes/HOC/redirect";

//Component Start
const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const AuthenticationTOHome = withRedirect(Authentication);

  useEffect(() => {
   
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route
          path="authentication"
          element={<AuthenticationTOHome currentUser={currentUser} />}
        />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
