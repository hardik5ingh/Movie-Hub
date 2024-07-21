import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain="dev-jogtdubf0fxu73i0.us.auth0.com"
    clientId="hRvR2nSo7Oh0P5F50iGdym5IIWOWLSz0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
