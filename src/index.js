import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducers/app";

import Application from "./containers/app";

import "./index.scss";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("root"),
);
