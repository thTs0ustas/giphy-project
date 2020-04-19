import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { searchReducer } from "./reducers/searchReducer";
import { searchSuccess } from "./actions/searchAction";

const store = createStore(searchReducer);

const results = [
  {
    full:
      "https://media1.giphy.com/media/uw3fTCTNMbXAk/giphy.gif?cid=c3161d81444d01a8e0890d5b21ff2f447912d63f5a7b9c05&rid=giphy.gif",
    thumbnail:
      "https://media1.giphy.com/media/uw3fTCTNMbXAk/100_s.gif?cid=c3161d81444d01a8e0890d5b21ff2f447912d63f5a7b9c05&rid=100_s.gif",
  },
  {
    full:
      "https://media3.giphy.com/media/A8NNZlVuA1LoY/giphy.gif?cid=c3161d81444d01a8e0890d5b21ff2f447912d63f5a7b9c05&rid=giphy.gif",
    thumbnail:
      "https://media3.giphy.com/media/A8NNZlVuA1LoY/100_s.gif?cid=c3161d81444d01a8e0890d5b21ff2f447912d63f5a7b9c05&rid=100_s.gif",
  },
];

window.setTimeout(() => store.dispatch(searchSuccess(results)), 2000);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
