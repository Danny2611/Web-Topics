import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { Toaster } from "sonner";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AppWrapper } from "./compoments/common/PageMeta";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppWrapper>
        <App />
        <Toaster
          position="top-right"
          richColors
          expand={false}
          duration={3000}
        />
      </AppWrapper>
    </ThemeProvider>
  </React.StrictMode>,
);
