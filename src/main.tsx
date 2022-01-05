import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <Container
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
