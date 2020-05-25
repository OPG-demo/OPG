import React from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'
import '../../scss/StateOfCompany.scss'


const SideNav = () =>{
  return(
    <div className='sidenav-container'>
    <ul className='nav'>
      <li className='nav-item'>
        <Link
          to='missionStatement'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Mission Statement
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='successFactors'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Success Factors
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='coreCompetencies'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Core Competencies
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='externalEnvironment'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          External Environment Review
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='organizationChart'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Organization Chart
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='executiveSummary'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Executive Summary
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default SideNav