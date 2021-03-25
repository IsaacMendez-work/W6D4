import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateCounter from './components/StateCounter';

ReactDOM.render(
  <React.StrictMode>
    <StateCounter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();