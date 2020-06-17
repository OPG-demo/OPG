import React from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'
import {List} from 'semantic-ui-react'
import '../../scss/SituationAnalysis.scss'


const swotSideNav = () =>{
  return(
    <div className='sidenav-container'>
    <List link className='nav'>
      <List.Item className='nav-item'>
        <Link
          to='strengths'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Strengths
        </Link>
      </List.Item>
      <List.Item className='nav-item'>
        <Link
          to='weaknesses'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Weaknesses
        </Link>
      </List.Item>
      <List.Item className='nav-item'>
        <Link
          to='opportunities'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Opportunities
        </Link>
      </List.Item>
      <List.Item className='nav-item'>
        <Link
          to='threats'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Threats
        </Link>
      </List.Item>
    </List>
  </div>
  )
}

export default swotSideNav