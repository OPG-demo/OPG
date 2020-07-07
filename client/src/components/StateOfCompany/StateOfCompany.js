import React from 'react'
import SuccessFactorTable from './successFactorTable'
import CoreCompetencyTable from './coreCompetencyTable'
import ExternalEnvironmentTable from './externalEnvironmentTable'
import OrganizationalChart from './organizationChart'
import SideNav  from './stateSideNav'
import MissionStatement from './MissionStatement'
import {Element, animateScroll as scroll} from 'react-scroll'
import '../../scss/StateOfCompany.scss'
import MissionStatementForm from '../forms/MissionStatementAddForm'
import ExecutiveSummary from './ExecutiveSummary'

const StateOfCompany = () =>{
  const scrollToTop = () =>{
    scroll.scrollToTop()
  }

  return(
    <div className='state-container'>
      <div className='sidenav'>
        <SideNav/>
      </div>
      <div className='elements'>
        <Element name='missionStatement'>
        <section className='top'>
        <div className='missionStatement'>
          <h2>Mission Statement</h2>
          <MissionStatement/>
        </div>
        </section>
        </Element>
        <Element name='successFactors'>
        <div className='successFactors'>
          <h2>Success Factors</h2>
          <SuccessFactorTable/>
        </div>
        </Element>
        <Element name='coreCompetencies'>
        <div className='coreCompetencies'>
          <h2>Core Competencies</h2>
          <CoreCompetencyTable/>
        </div>
        </Element>
        <Element name='externalEnvironment'>
        <div className='externalEnvironment'>
          <h2>External Environment</h2>
          <ExternalEnvironmentTable/>
        </div>
        </Element>
        <Element name='organizationChart'>
        <div className='organizationChart'>
          <h2>Organization Chart</h2>
          <OrganizationalChart/>
        </div>
        </Element>
        <Element name='executiveSummary'>
        <div className='executiveSummary'>
          <h2>Executive Summary</h2>
          <ExecutiveSummary/>
        </div>
        </Element>
      </div>
      <div className='arrow'>
        <i className="fas fa-arrow-up" onClick={scrollToTop}></i>
      </div>
    </div>
  )
}

export default StateOfCompany