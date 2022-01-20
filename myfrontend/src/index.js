import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from'react-toastify';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from 'react-redux'
import store from '../src/Redux/Store'

ReactDOM.render(
  <>
    <Provider store={store}>
      <Router>
        <App />
        <ToastContainer/>
      </Router>
    </Provider>
  </>,
  document.getElementById("root")
);
