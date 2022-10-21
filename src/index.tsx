import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Provider from './context/Providers';

import { GlobalStyle } from './styles.css/global';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
          <GlobalStyle/>
          <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


