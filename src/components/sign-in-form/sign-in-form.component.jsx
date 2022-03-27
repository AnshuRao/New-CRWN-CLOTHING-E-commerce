//REACT
import { useEffect, useState, useContext } from "react";

//import { UserContext } from "../../contexts/user.contexts";

//FireBase
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInExistingUserUsingEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";

//Component Imported
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.style.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

//Component Start
const SignIn = () => {

  
 // const { setCurrentUser } = useContext(UserContext);


  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
   // setCurrentUser(response.user);
   // createUserDocumentFromAuth(response.user);
  };


  const logGoogleRedirect = async () => {
    const response = await signInWithGoogleRedirect();
    console.log(response);
    //createUserDocumentFromAuth(response.user)
  };

  //
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    console.log(response);
  }, []);


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
      const response = await signInExistingUserUsingEmailAndPassword(
        email,
        password
      );
      setFormFields({ ...defaultFormFields });
      console.log(response);
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
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
