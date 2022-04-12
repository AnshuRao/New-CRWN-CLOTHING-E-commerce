/*

default 

default inverted

google sign in
*/

//STYLED-COMPONENTS
import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from "./button.style";

const getButton = (buttontype = BUTTON_TYPE_CLASSES.base) => {
  return {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttontype];
};

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  base: "base",
};

const Button = ({ children, buttonType,isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton disabled={isLoading} {...otherProps}>{
    isLoading ? <ButtonSpinner/> :
    children}</CustomButton>;
};

export default Button;
