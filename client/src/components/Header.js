import React from 'react'
import {NavLink} from 'react-router-dom'


const Header = () =>{
  return(
    <div className='header-container'>
      <div className='nav-container'>
        <NavLink>Dashboards</NavLink>
        <NavLink>State of Company</NavLink>
        <NavLink>Situation Analysis</NavLink>
        <NavLink>Objectives</NavLink>
        <NavLink>Reports</NavLink>
      </div>
    </div>
  )
}

export default Header;