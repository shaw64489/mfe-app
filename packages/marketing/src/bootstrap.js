import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount Function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in dev and in isolation call mount immediatley

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through Container
// and we should export the mount function

export { mount };
