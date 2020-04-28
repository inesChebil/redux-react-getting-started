import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

import registerServiceWorker from "./registerServiceWorker";
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});
// Create a logger middelware
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middelware] Dispatching", action);
      const result = next(action);
      console.log("[Middelware] next state", store.getState());

      return result;
    };
  };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
