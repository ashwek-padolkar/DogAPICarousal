import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CarousalProvider } from "./store/carousalStore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CarousalProvider>
      <App />
    </CarousalProvider>
  </StrictMode>
);
