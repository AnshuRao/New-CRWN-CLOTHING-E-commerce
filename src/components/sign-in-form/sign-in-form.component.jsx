//REACT
import { useEffect, useState, useContext } from "react";

//import { UserContext } from "../../contexts/user.contexts";

//FireBase
import {
  signInWithGooglePopup,
  signInExistingUserUsingEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

//Redux - DISPATCH
import { useDispatch } from "react-redux";
//users action
import { googleSignInStart , emailSignInStart } from "../../store/user/user.action";
//Component Imported
import FormInput from "../form-input/form-input.component";
import Button ,{BUTTON_TYPE_CLASSES} from "../button/button.component";

import "./sign-in-form.style.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

//Component Start
const SignIn = () => {

  const dispatch = useDispatch();

  const logGoogleUserHander = async () => {
   dispatch(googleSignInStart())
 
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch( emailSignInStart(email, password));
      setFormFields({ ...defaultFormFields });
      
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong Password, Try Again!!");
          break;
        case "auth/user-not-found":
          alert(`You don't have an Account , Kindly Sign-up`);
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          required
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
        />
        <FormInput
          required
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
        />
        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUserHander}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
