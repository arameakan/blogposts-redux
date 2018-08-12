import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import AppRouter from "./routers/AppRouter";
import rootReducer from "./reducers";
import promise from "redux-promise";

import "./styles/style.css";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const jsx = (
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <AppRouter />
  </Provider>
);

render(jsx, document.getElementById("root"));
