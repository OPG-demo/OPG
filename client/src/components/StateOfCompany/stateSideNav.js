import React from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'
import {List} from 'semantic-ui-react'
import '../../scss/StateOfCompany.scss'


const SideNav = () =>{
  return(
    <div className='sidenav-container'>
    <List link className='nav'>
      <List.Item className='nav-item'>
        <Link
          to='missionStatement'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Mission Statement
        </Link>
      </List.Item>
      <List.Item className='nav-item'>
        <Link
          to='successFactors'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Success Factors
        </Link>
      </List.Item>
      <List.Item className='nav-item'>
        <Link
          to='coreCompetencies'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Core Competencies
        </Link>
      </List.Item>
      <List.Item className='nav-item'>
        <Link
          to='externalEnvironment'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          External Environment
        </Link>
      </List.Item>
      <List.Item className='nav-item'>
        <Link
          to='organizationChart'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Organization Chart
        </Link>
      </List.Item>
      <List.Item className='nav-item'>
        <Link
          to='executiveSummary'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Executive Summary
        </Link>
      </List.Item>
    </List>
  </div>
  )
}

export default SideNav