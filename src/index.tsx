import React from "react";
import ReactDOM from "react-dom";
import { Grommet } from "grommet";

import Header from "./components/Header";
import { theme } from "./theme";

function App() {
  return (
    <Grommet theme={theme}>
      <Header />
    </Grommet>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
