import React from 'react';
import { render } from 'react-dom';
import createStore from 'storeon';
import StoreContext from 'storeon/react/context';
import currencies from './currencies.js';
import App from './App';

const store = createStore([currencies]);

render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root'),
);
