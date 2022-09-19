import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const shadows = {
  cell: "0 1px 3px 0 var(--chakra-colors-brand-800),0 1px 2px 0 var(--chakra-colors-brand-800)",
};

export default extendTheme({ colors, shadows });
