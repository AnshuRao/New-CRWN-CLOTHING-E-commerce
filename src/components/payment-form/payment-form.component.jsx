//Stripe
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
//React
import { useState } from "react";
//Selector
import { useSelector } from "react-redux";
//Cart Selector
import { selectCartTotal } from "../../store/cart/cart.selector";
//User selector
import { selectCurrentUser } from "../../store/user/user.selector";


import { BUTTON_TYPE_CLASSES } from "../button/button.component";
//Styled
import { PaymentFormContainer, FormContainer ,PaymentButton} from "./payment-form.style";
//Component Start
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
     e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
 setIsProcessingPayment(true);
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });


    const clientSecret = response.paymentIntent.client_secret;

    console.log(clientSecret);
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });
    setIsProcessingPayment(false);
    if (paymentResult.error) {
      console.log(paymentResult.error.message)
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert(`Dear, ${currentUser ? currentUser.displayName : 'Guest' } Payment was Successful`);
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement ></CardElement>

        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};
export default PaymentForm;
