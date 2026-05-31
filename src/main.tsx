import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PoliciesProvider } from './context/PoliciesContext';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PoliciesProvider>
      <App />
    </PoliciesProvider>
  </React.StrictMode>,
)