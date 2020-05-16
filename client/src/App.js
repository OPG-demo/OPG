import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import Header from './components/Header'
import PersonalDashboard from './components/Dashboards/PersonalDashboard'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='routes'>
        <Route exact path='/' component={PersonalDashboard}/>
      </div>
    </div>
  );
}

export default App;
