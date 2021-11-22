import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const redirectUrl = "http://localhost:3000/dashboard"

ReactDOM.render(
  <Auth0Provider
  domain="dev-s4rfj-y2.eu.auth0.com"
  clientId="DKUT9sDK1cgfQqJzuDo2uQQVzxLlLvSr"
  redirectUri={redirectUrl}
  audience="https://localhost:3000"
  scope="read:current_user update:current_user_metadata"
>
  <App/>,
  </Auth0Provider>,
  document.getElementById('root')
);

