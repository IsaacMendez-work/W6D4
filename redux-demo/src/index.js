import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import StateCounter from './components/StateCounter';
import ReduxCounter from './components/ReduxCounter';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      {/* <StateCounter /> */}
      <ReduxCounter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();