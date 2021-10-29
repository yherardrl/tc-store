import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./containers/App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
