import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
    sprelo: {
      yellow: "#ECB43F",
    },
    input: {
      background: "#F4F4F4",
      border: "#B6B6B6"
    },
    button: {
      confirm: "#ECB43F"
    }
  },
});