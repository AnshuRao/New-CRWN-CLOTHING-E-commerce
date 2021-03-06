import React from "react";
import ReactDOM from "react-dom";
import "./index.scss"; 
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//React-Redux
import { BrowserRouter } from "react-router-dom";
//React-REDUX Provider
import { Provider } from "react-redux";
//REDUX_Store
import  store1 ,{ persistor} from './store/store1';
//Redux-persit
import { PersistGate } from "redux-persist/integration/react";
//Stripe
import { Elements } from "@stripe/react-stripe-js";
import {stripePromise} from './utils/stripe/stripe.utils';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store1}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
