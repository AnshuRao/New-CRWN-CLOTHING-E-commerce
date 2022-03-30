
//COMPONENTS Imported 
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import Authentication from "./routes/authantication/Authentication.component.";
 import Shop from "./routes/shop/shop.component";
 import Checkout from "./routes/checkout/checkout.component";

//ROUTER
import {Routes , Route} from 'react-router-dom';


//Component Start
const App = ()=>{

  return(

      <Routes>
        <Route path='/' element={<Navigation/>} >
          <Route index element={<Home/>}/>
          <Route path="authentication" element={<Authentication/>}/>
          <Route path = "shop/*"  element={<Shop/>} />
          <Route path ="checkout" element={<Checkout/>}  />
        </Route>
      </Routes>

  )
}

export default App;
