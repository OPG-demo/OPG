import React from 'react';
import {Route} from 'react-router-dom'

import Dashboard from './components/Dashboard'
import './scss/index.scss';

import Header from './components/Header'
import Footer from './components/Footer';
import StateOfCompany from './components/stateOfCompany/StateOfCompany';
import SituationAnalysis from './components/SWOT/SituationAnalysis';
import Objectives from './components/Objectives'
import Login from './components/Login'


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='routes'>
        <Route exact path='/' component={Login}/>
        <Route exact path='/dashboards' component={Dashboard}/>
        <Route exact path='/stateofcompany' component={StateOfCompany}/>
        <Route exact path='/swot' component={SituationAnalysis}/>
        <Route exact path='/objectives' component={Objectives}/>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
