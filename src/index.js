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
import { store , persistor} from "./store/store";
//Redux-persit
import {PersistGate} from 'redux-persist/integration/react';
//loading
import Spinner from './components/spinner/spinner.component';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={<Spinner/>} persistor={persistor}>
      <BrowserRouter>
        <App />
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
