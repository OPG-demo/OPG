import React from 'react'
import {Icon, Label, Menu, Table} from 'semantic-ui-react'
import SuccessFactorTable from './successFactorTable'
import CoreCompetencyTable from './coreCompetencyTable'
import ExternalEnvironmentTable from './externalEnvironmentTable'
import OrganizationalChart from './organizationChart'
import SideNav  from './sideNav'

import {Link, Element, animateScroll as scroll} from 'react-scroll'


import '../../scss/StateOfCompany.scss'

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
          <p>This is a mission statement- there will be a form to edit this</p>
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
          <p>This is a summary- there will be a form to edit this</p>
        </div>
        </Element>
      </div>
      <div className='arrow'>
        <i class="fas fa-arrow-up" onClick={scrollToTop}></i>
      </div>
    </div>
  )
}

export default StateOfCompany