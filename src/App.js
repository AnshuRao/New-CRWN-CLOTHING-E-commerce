
//COMPONENTS 
import Home from "./components/routes/home/home.component";
import Navigation from './components/routes/navigation/navigation.component';
import Authentication from "./components/routes/authantication/Authentication.component.";
 
//ROUTER
import {Routes , Route} from 'react-router-dom';

const App = ()=>{


  return(

      <Routes>
        <Route path='/' element={<Navigation/>} >
          <Route index element={<Home/>}/>
          <Route path="authentication" element={<Authentication/>}/>
        </Route>
      </Routes>

  )
}

export default App;
