import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import { useState } from "react";
import { darkTheme, lightTheme } from "../util/themeHelper";
import Layout from "@/layout";
export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      
      <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        <Component {...pageProps} />
      </Layout>
      
    </ThemeProvider>
  );
}
