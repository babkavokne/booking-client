import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store/store.js';
import { Provider } from 'react-redux';
import './styles/Common.sass';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)