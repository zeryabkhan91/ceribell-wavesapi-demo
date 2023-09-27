import './index.css';

import { AppRouter } from 'router';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import ResponsiveAppBar from 'layout/navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResponsiveAppBar />
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
