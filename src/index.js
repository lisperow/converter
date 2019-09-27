import React from 'react';
import { render } from 'react-dom';
import StoreContext from 'storeon/react/context';
import store from './store';

import App from './components/App/App';

render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root'),
);
