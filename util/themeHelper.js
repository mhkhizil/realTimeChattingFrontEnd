import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff", // Main background
      paper: "#f4f4f4",  // Card or paper components
    },
    text: {
      primary: "#000000",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212", // Main background for dark mode
      paper: "#1e1e1e",  // Card or paper components
    },
    text: {
      primary: "#ffffff",
    },
  },
});
