import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router";
import { SidebarProvider } from "./context/sidebarContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </HashRouter>
  </StrictMode>
);
