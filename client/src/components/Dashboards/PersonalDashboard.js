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
      width: "100%",
      height: "80%"
    },
    fontName: "Roboto",
    is3D: true, 
    tooltip: {trigger: 'selection'}
  }

  const barOptions = {
    colors: ['#77964C','#A32721','#7AA095'],
    legend: {position: 'top'},
    isStacked: true,
    vAxis: {minValue: 0, title: 'Number of Objectives'},
    hAxis: {title: 'Department'},
    tooltip: {trigger: 'selection'}

  }

  return(
    <div className='dashboards-container'>
    <div className='personal-dashboard-container'>
      <h2>Personal</h2>
      <div className='cards-container'>
        <Card className='dash-card'>
          <Card.Header className='dash-card-header'>Objectives</Card.Header>
          <Card.Description className='dash-card-description'>
            <Chart
              width={'20rem'}
              height={'20rem'}
              className='chart'
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
          <Card.Header className='dash-card-header'>Tactics</Card.Header>
          <Card.Description className='dash-card-description'>
            <Chart
            width={'20rem'}
            height={'20rem'}
              className='chart'
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
          <Card.Header className='dash-card-header'>Committee Objectives</Card.Header>
          <Card.Description className='dash-card-description'>
            <Chart
              width={'20rem'}
              height={'20rem'}
              className='chart'
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
          <Card.Header className='dash-card-header'>Company Totals</Card.Header>
          <Card.Description className='dash-card-description'>
            <Chart
              width={'80rem'}
              height={'30rem'}
              chartType="ColumnChart"
              data={[
                ['Department', 'Complete', 'Overdue', 'Pending'],
                ['Operations', 1, 4, 2],
                ['Marketing', 2, 2, 3],
                ['Finance and Administration', 5, 1, 3],
                ['OPG', 3, 4, 1],
                ['Executive', 3, 2, 4],
              ]}
              options={barOptions}
            />
          </Card.Description>
        </Card>
      </div>
    </div>
    </div>
  )
}

export default PersonalDashboard;