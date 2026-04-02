import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
// import AppProvider from "./context/AppProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AppProvider> */}
        <App />
      {/* </AppProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
