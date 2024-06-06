import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Router from './routes/routes.tsx';
import { GlobalStyles } from './styles/global.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>,
);
