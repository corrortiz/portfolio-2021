import React from "react";
import ReactDOM from "react-dom";
import { Grommet, Box, Heading, Button } from "grommet";
import { Notification } from "grommet-icons";

const AppBar = (props: any) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Monserrat",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <AppBar>
        <Heading level="3" margin="none">
          Hello AO HyS
        </Heading>
        <Button icon={<Notification />} onClick={() => {}} />
      </AppBar>
    </Grommet>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
