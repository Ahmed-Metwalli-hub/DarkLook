import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "swiper/css/bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FlexDirContexProvider } from "./Context/FlexDirContex.jsx";
import { ApiContextProvider } from "./Context/ApiContext.jsx";
import { CartContextProvider } from "./Context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <FlexDirContexProvider>
      <ApiContextProvider>
        <App />
      </ApiContextProvider>
    </FlexDirContexProvider>
  </CartContextProvider>
);
