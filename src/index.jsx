import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import Hello from './Hello';
import Counter from './Counter';
import Buylist from './Buylist';
//import From from './From';
//import Bmi from './Bmi';
import Bookstore from './Bookstore';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/*<Hello name="Pumipat" surname="Puengcharoen"age={22} />
    <Hello />
    <Hello />
    <Counter />
    <Counter />
    <Buylist />
    <From />
    <Bmi />*/}
    <Bookstore />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
