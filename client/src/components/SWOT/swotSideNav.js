import React from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'
import '../../scss/SituationAnalysis.scss'


const swotSideNav = () =>{
  return(
    <div className='sidenav-container'>
    <ul className='nav'>
      <li className='nav-item'>
        <Link
          to='strengths'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Strengths
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='weaknesses'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Weaknesses
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='opportunities'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Opportunities
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='threats'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Threats
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default swotSideNav