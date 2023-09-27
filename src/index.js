import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store,persistor  } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

 <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>

    <Auth0Provider
      domain="dev-cdvrw2nlqocrd3l0.us.auth0.com"
      clientId="MZRqgPdPUppEkefNeGVgcPLUSEtI0HPb"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>

    </BrowserRouter>
    </PersistGate>
  </Provider>

  </React.StrictMode>
);