import React from "react";
import ReactDOM from "react-dom";
import { Grommet } from "grommet";
import { Provider } from "react-redux";

import Header from "./components/Header";
import SnackBar from "./components/SnackBar";

import { theme } from "./theme";
import { store } from "./store";

function App() {
  return (
    <Grommet theme={theme}>
      <Header />
      <SnackBar />
    </Grommet>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
