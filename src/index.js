import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { applyPolyfills, defineCustomElements } from "h8k-components/loader";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

import store from "./store/RatingStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

registerServiceWorker();

applyPolyfills().then(() => {
  defineCustomElements(window);
});
