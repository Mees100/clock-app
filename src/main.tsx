import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  FluentProvider,
  Theme,
  webLightTheme,
} from "@fluentui/react-components";

const customLightTheme: Theme = {
  ...webLightTheme,
  colorNeutralBackground1: "#0a0d1c",
  colorNeutralForegroundInverted2: "#242242",
};
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FluentProvider theme={customLightTheme}>
      <App />
    </FluentProvider>
  </StrictMode>
);
