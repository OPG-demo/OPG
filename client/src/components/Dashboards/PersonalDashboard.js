import React from 'react'
import '../../scss/Dashboard.scss'
import {Card} from 'semantic-ui-react'
import {Chart} from 'react-google-charts'


const PersonalDashboard = () =>{
  const pieOptions = {
    slices: [
      {
        color: '#77964C'
      },
      {
        color: '#A32721'
      },
      {
        color: '#7AA095'
      }
    ],
    legend: {
      display: 'none',
      position: "bottom",
      textStyle: {
        color: "233238",
      },
      width: '90%',
    },
    chartArea: {
      left: 0,
      top: 0,
      width: "98%",
      height: "80%"
    },
    fontName: "Roboto",
    is3D: true, 
    tooltip: {trigger: 'selection'}
  }

  return(
    <div className='dashboards-container'>
    <div className='personal-dashboard-container'>
      <h2>Personal</h2>
      <div className='cards-container'>
        <Card className='dash-card'>
          <Card.Header className='dash-card-header'>My Objectives</Card.Header>
          <Card.Description className='dash-card-description'>
            <Chart
              className='chart'
              width={'100%'}
              height={'100%'}
              chartType="PieChart"
              data={[
                ['Status', 'Percentage complete'],
                ['Complete', 50],
                ['Overdue', 20],
                ['Pending', 30]
              ]}
              options={pieOptions}
            />
          </Card.Description>
        </Card>

        <Card className='dash-card'>
          <Card.Header className='dash-card-header'>My Tactics</Card.Header>
          <Card.Description className='dash-card-description'>
            <Chart
              className='chart'
              width={'100%'}
              height={'100%'}
              chartType="PieChart"
              data={[
                ['Status', 'Percentage complete'],
                ['Complete', 50],
                ['Overdue', 20],
                ['Pending', 30]
              ]}
              options={pieOptions}
            />
          </Card.Description>
        </Card>

        <Card className='dash-card'>
          <Card.Header className='dash-card-header'>My Committee Objectives</Card.Header>
          <Card.Description className='dash-card-description'>
            <Chart
              className='chart'
              width={'100%'}
              height={'100%'}
              chartType="PieChart"
              data={[
                ['Status', 'Percentage complete'],
                ['Complete', 5],
                ['Overdue', 2],
                ['Pending', 2]
              ]}
              options={pieOptions}
            />
          </Card.Description>
        </Card>
      </div>
    </div>

    <div className='company-dashboard-container'>
      <h2>Company</h2>
      <div className='cards-container'>
        <Card className='dash-card'>
          <Card.Header className='dash-card-header'>Operations</Card.Header>
          <Card.Description className='dash-card-description'>
            <Chart
              className='chart'
              width={'100%'}
              height={'100%'}
              chartType="PieChart"
              data={[
                ['Status', 'Percentage complete'],
                ['Complete', 50],
                ['Overdue', 20],
                ['Pending', 30]
              ]}
              options={pieOptions}
            />
          </Card.Description>
        </Card>
      </div>
    </div>
    </div>
  )
}

export default PersonalDashboard;