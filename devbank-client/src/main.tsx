import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AppProvider } from './hooks/index.tsx';
import Router from './routes/routes.tsx';
import { GlobalStyles } from './styles/global.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppProvider>
    <ToastContainer autoClose={2000} theme="colored" pauseOnHover={false} />
    <GlobalStyles />
  </React.StrictMode>,
);
