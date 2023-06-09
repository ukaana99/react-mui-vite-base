import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App';

import { LayoutContextProvider } from './store/layout-context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LayoutContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LayoutContextProvider>
  </React.StrictMode>,
);
