import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./component/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthContextProvider>
);
