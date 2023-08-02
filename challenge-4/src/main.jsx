import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";

const theme = extendTheme({
  fonts: {
    body: "Roboto",
  },
  colors: {
    brand: {
      white: "#E1E1E6",
      green1: "#00B37E",
      green2: "#07847E",
      purple1: "#633BBC",
      purple2: "#282843",
      purple3: "#1A1924",
    },
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "brand.purple3",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
