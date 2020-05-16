import React from 'react'
import '../../scss/personalDashboard.scss'
import {PieChart} from 'react-minimal-pie-chart'

const PersonalDashboard = () =>{

  return(
    <div className='personal-dashboard-container'>
      <div className='container'>
        <h2>My Objectives</h2>
        <hr/>
        <div className='status'>
        <PieChart
          className='PieChart'
          data={[
            { title: 'One', value: 10, color: '#E38627' },
            { title: 'Two', value: 15, color: '#C13C37' },
            { title: 'Three', value: 20, color: '#6A2135' },
          ]}
          lineWidth={55}
        />
        </div>
      </div>
      <div className='container'>
        <h2>My Tactics</h2>
        <hr/>
        <div className='status'>
          
        </div>
      </div>
      <div className='container'>
        <h2>My Committee Objectives</h2>
        <hr/>
        <div className='status'>
          
        </div>
      </div>
    </div>
  )
}

export default PersonalDashboard;