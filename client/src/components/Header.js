import React from 'react'
import {NavLink} from 'react-router-dom'


const Header = () =>{
  return(
    <div className='header-container'>
      <div className='nav-container'>
        <NavLink to='/dashboards'>Dashboards</NavLink>
        <NavLink to='/stateofcompany'>State of Company</NavLink>
        <NavLink to='/swot'>Situation Analysis</NavLink>
        <NavLink to='/objectives'>Objectives</NavLink>
        <NavLink to='/reports'>Reports</NavLink>
      </div>
    </div>
  )
}

export default Header;