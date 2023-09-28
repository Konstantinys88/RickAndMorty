import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/App';

import GetFromBD from './services/GetFromBD';

import './style/style.scss';

const { getAllCharcters, getCharacters } = GetFromBD();

const arrayCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 826];
const num = 1;

getAllCharcters(arrayCharacters).then(res => {
  res.map(item => console.log(item.id, item.name, item.gender))
})

getCharacters(num).then(res => {
  console.log(res.name)
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

