import { extendTheme } from "@chakra-ui/react";

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
        overflow: "hidden",
        color: "brand.white",
      },
    },
  },
  components: {
    Button: {
      _hover: {
        bg: "none",
        color: "inherit",
        textDecoration: "none",
        boxShadow: "none",
      },
      _focus: {
        boxShadow: "none",
        bg: "transparent",
      },
    },
  },
});

export default theme;
