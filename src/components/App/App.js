import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Converter from '../Converter/Converter';
import ListOfCurrencies from '../ListOfCurrencies/ListOfCurrencies';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <nav className='navigation'>
          <Link className='link' to='/'>Converter</Link>
          <Link className='link' to='/currencies'>Currencies</Link>
        </nav>
        <Route path='/' exact component={Converter} />
        <Route path='/currencies' component={ListOfCurrencies} />
      </div>
    </Router>
  );
}

export default App;
