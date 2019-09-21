import React from 'react';
import { render } from 'react-dom';
import createStore from 'storeon';
import StoreContext from 'storeon/react/context';
import reducers from './reducers';
import App from './App';

const store = createStore();

render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root'),
);
