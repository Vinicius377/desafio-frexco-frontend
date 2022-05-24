import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/style.global.css";
import { ThemeProvider } from "@mui/system";
import theme from "./theme/default";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
