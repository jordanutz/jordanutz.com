import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./styles/biography.css";
import "./styles/cover.css";
import "./styles/navigation.css";
import "./styles/reset.css";
import "./styles/social.css";
import "./styles/tag.css";
import "./styles/variables.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
