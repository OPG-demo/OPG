import React from 'react';
import {Route} from 'react-router-dom'

import Header from './components/Header'
import PersonalDashboard from './components/Dashboards/PersonalDashboard'
import './scss/index.scss';

import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='routes'>
        <Route exact path='/' component={PersonalDashboard}/>
      </div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
