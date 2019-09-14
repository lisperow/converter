import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import Converter from './components/Converter/Converter';
import ListOfCurrencies from './components/ListOfCurrencies/ListOfCurrencies';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Link to='/'>Converter</Link>
        <Link to='/currencies'>Currencies</Link>
      </div>
      <Route path='/' exact component={Converter} />
      <Route path='/currencies' component={ListOfCurrencies} />
    </Router>
  );
}

export default App;
