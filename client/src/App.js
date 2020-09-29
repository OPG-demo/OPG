import React from 'react';
import {Route} from 'react-router-dom'

import Dashboard from './components/Dashboard'
import './scss/index.scss';

import Header from './components/Header'
// import Footer from './components/Footer';
import StateOfCompany from './components/stateOfCompany/StateOfCompany';
import SituationAnalysis from './components/SWOT/SituationAnalysis';
import Objectives from './components/Objectives'
import Login from './components/Login'
import MissionStatementForm from './components/forms/MissionStatementForm';
import AddSuccessFactorForm from './components/forms/AddSuccessFactorForm'
import EditSuccessFactorForm from './components/forms/EditSuccessFactorForm'
import AddCoreCompForm from './components/forms/AddCoreCompForm'
import EditCoreCompForm from './components/forms/EditCoreCompForm'
import AddSwotForm from './components/forms/AddSwotForm'
import EditSwotForm from './components/forms/EditSwotForm'
import AddObjectiveForm from './components/forms/AddObjectiveForm'
import EditObjectiveForm from './components/forms/EditObjectiveForm'
import AddTacticForm from './components/forms/AddTacticForm';
import EditTacticForm from './components/forms/EditTacticForm'

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
        <Route exact path='/addmission' component={MissionStatementForm}/>
        <Route exact path='/addsuccess' component={AddSuccessFactorForm}/>
        <Route exact path='/editsuccess' component={EditSuccessFactorForm}/>
        <Route exact path='/addcorecomp' component={AddCoreCompForm}/>
        <Route exact path='/editcorecomp' component={EditCoreCompForm}/>
        <Route exact path='/addswot' component={AddSwotForm}/>
        <Route exact path='/editswot' component={EditSwotForm}/>
        <Route exact path='/addobjective' component={AddObjectiveForm}/>
        <Route exact path='/editobjective' component={EditObjectiveForm}/>
        <Route exact path='/addtactic' component={AddTacticForm}/>
        <Route exact path='/edittactic' component={EditTacticForm}/>

      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
