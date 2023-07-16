import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const count = 7;

root.render(
  <React.StrictMode>
    <App count={count} />
  </React.StrictMode>
);
