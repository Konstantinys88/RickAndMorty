import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';

import GetFromBD from './services/GetFromBD';

const getFromBD = new GetFromBD();

getFromBD.getAllCharcters().then(res => console.log(res))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

