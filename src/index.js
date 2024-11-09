import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import App from "./components/App/App";
import { PersistGate } from "redux-persist/integration/react";
import { GlobalStyles } from "./rootStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
