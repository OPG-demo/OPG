import React from 'react';
import {Route} from 'react-router-dom'

import Dashboard from './components/Dashboard'
import './scss/index.scss';

import Header from './components/Header'
import Footer from './components/Footer';
import StateOfCompany from './components/stateOfCompany/StateOfCompany';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='routes'>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/dashboards' component={Dashboard}/>
        <Route exact path='/stateofcompany' component={StateOfCompany}/>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
