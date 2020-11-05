import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {gamers} from './gamers'

ReactDOM.render(
  <div>
    <React.StrictMode>
      <Card id={gamers[0].id} name={gamers[0].name} email={gamers[0].email} />
      <Card id={gamers[1].id} name={gamers[1].name} email={gamers[1].email} />
      <Card id={gamers[2].id} name={gamers[2].name} email={gamers[2].email} />
    </React.StrictMode>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
