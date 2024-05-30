import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <Auth0Provider
      domain='dev-chx8zaff25g54qhu.us.auth0.com'
      clientId='eD2OUGnzmUpT9HPu0U5aYqxqSXRHNpOS'
      authorizationParams={{
        redirect_uri: window.location.origin, 
        audience:"http://localhost:9000",
        scope: "read:current_user",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
