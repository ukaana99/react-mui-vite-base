import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App';

import { LayoutContextProvider } from './store/layout-context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LayoutContextProvider>
      <App />
    </LayoutContextProvider>
  </React.StrictMode>,
);
