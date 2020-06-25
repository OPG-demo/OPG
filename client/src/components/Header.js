import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/rockymtn.jpg'

const Header = () => {
	return (
		<div className='header-container'>
			<div className='nav-container'>
				<img src={logo} alt='logo'></img>
				<NavLink to='/dashboards' className='nav-links'>
					Dashboards
				</NavLink>
				<NavLink to='/stateofcompany' className='nav-links'>
					State of Company
				</NavLink>
				<NavLink to='/swot' className='nav-links'>
					Situation Analysis
				</NavLink>
				<NavLink to='/objectives' className='nav-links'>
					Objectives
				</NavLink>
				<NavLink to='/reports' className='nav-links'>
					Reports
				</NavLink>
				<div className='icon-container '>
					<div>
						<i className='fas fa-wrench right-align icon'></i>
						<p className='caption'>Admin</p>
					</div>
					<div>
						<i className='fas fa-user right-align icon'></i>
						<p className='caption'>My Profile</p>
					</div>
				</div>
      </div>
      {/* <div className='sub-header'>
        <h1 className='title'>Dashboards</h1>
        <hr className='divider'></hr>
      </div> */}
		</div>
	);
};
export default Header;
