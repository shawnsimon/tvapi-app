import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1E2D48",
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: "#fff",
    },
    background: {
      default: "#F2F3F8",
    },
  },
  typography: {
    h1: {
      fontSize: 36,
      fontWeight: 500,
    },
    h2: {
      fontSize: 32,
      fontWeight: 420,
    },
    h3: {
      fontSize: 28,
      fontWeight: 410,
    },
    h4: {
      fontSize: 24,
      fontWeight: 500,
    },
    h5: {
      fontSize: 17,
      fontWeight: 900,
    },
    h6: {
      fontSize: 16,
      fontWeight: 800,
    },
    subtitle1: {
      fontSize: 16,
    },
    body1: {
      fontSize: 10,
      fontWeight: 500,
    },
    button: {
      //fontStyle: "italic",
      fontSize: 10,
      fontWeight: 500,
      textTransform: "capitalize",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
