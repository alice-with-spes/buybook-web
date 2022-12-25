import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Reset } from 'styled-reset';

import GlobalStyle from './styled/GlobalStyle';

import routes from './routes';

const router = createBrowserRouter(routes);

function main() {
  const container = document.querySelector('#root');

  if (!container) {
    return;
  }

  ReactDOM.createRoot(container)
    .render((
      <React.StrictMode>
        <Reset/>
        <GlobalStyle/>
        <RouterProvider router={router} />
      </React.StrictMode>
    ));
}

main();
