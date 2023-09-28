import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/App';

import GetFromBD from './services/GetFromBD';

import './style/style.scss';

const { getAllCharcters, getCharacters } = GetFromBD();

// /test

const arrayCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 826];
getAllCharcters(arrayCharacters).then(res => console.log(res))

const num = 1;
getCharacters(num).then(res => {
  console.log(res)
});

///test

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

