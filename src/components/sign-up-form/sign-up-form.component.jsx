//REACt
import { useState } from "react";
//Dispatch
import { useDispatch } from "react-redux";
//user action
import { signUpStart } from "../../store/user/user.slice";
//COMPONENT Imported
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
//SCSS
import "./sign-up-form.style.scss";
//Intial_state
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

//COMPONENT Start
const SignUpForm = () => {
const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  //ON-CHANGE
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  //Reaet FormFields
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  //ON-SUBMIT
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    dispatch(signUpStart({email, password, displayName}))
    resetFormFields();
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="DisplayName"
          type="text"
          handleChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />

        <FormInput
          label="Email"
          type="email"
          handleChange={handleChange}
          name="email"
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          handleChange={handleChange}
          name="password"
          value={password}
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          handleChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
