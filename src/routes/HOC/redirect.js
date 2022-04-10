import {  Navigate } from "react-router-dom";

const withRedirect = (WrappedComponent) =>{


    const Redirected = ({currentUser})=>{
        console.log(`hi this ${currentUser}`)

        return currentUser ? <Navigate to="/" replace /> : <WrappedComponent/>
    }
    return Redirected;
}
 export default withRedirect;