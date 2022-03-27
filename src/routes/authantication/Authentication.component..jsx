
//Component Imported
import SignIn from '../../components/sign-in-form/sign-in-form.component'
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"

import './Authentication.style..scss';

const Authentication =()=>{

    return(
        <div className="authentication-container">
       
        <SignIn/>
        <SignUpForm/>

        </div>
    )
}

export default Authentication;