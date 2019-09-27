import createStore from 'storeon';
import currencies from './currencies.js';

export default createStore([
  currencies,
  process.env.NODE_ENV !== 'production' && require('storeon/devtools')
]);