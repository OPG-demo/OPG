import React from 'react'
import {Icon, Label, Menu, Table} from 'semantic-ui-react'
import SuccessFactorTable from './successFactorTable'
import CoreCompetencyTable from './coreCompetencyTable'
import ExternalEnvironmentTable from './externalEnvironmentTable'
import OrganizationalChart from './organizationChart'

import '../../scss/StateOfCompany.scss'

const StateOfCompany = () =>{
  return(
    <div className='state-container'>
      <div className='missionStatement'>
        <h2>Mission Statement</h2>
        <p>This is a mission statement- there will be a form to edit this</p>
      </div>
      <div className='successFactors'>
        <h2>Success Factors</h2>
        <SuccessFactorTable/>
      </div>
      <div className='coreCompetencies'>
        <h2>Core Competencies</h2>
        <CoreCompetencyTable/>
      </div>
      <div className='externalEnvironment'>
        <h2>External Environment</h2>
        <ExternalEnvironmentTable/>
      </div>
      <div className='organizationChart'>
        <h2>Organization Chart</h2>
        <OrganizationalChart/>
      </div>
      <div className='executiveSummary'>
        <h2>Executive Summary</h2>
        <p>This is a summary- there will be a form to edit this</p>
      </div>
    </div>
  )
}

export default StateOfCompany