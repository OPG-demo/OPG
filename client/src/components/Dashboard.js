import React from 'react'
import '../scss/Dashboard.scss'
import {Pie, Doughnut, Bar} from 'react-chartjs-2'

const objectiveData = {
	labels: [
		'Complete',
		'Overdue',
		'Pending'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#011638',
		'#607466',
		'#435058'
		]
  }]

};
const tacticData = {
	labels: [
		'Complete',
		'Overdue',
		'Pending'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#011638',
		'#607466',
		'#435058'
		]
  }]
};
const committeeObjectiveData = {
	labels: [
		'Complete',
		'Overdue',
		'Pending'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#011638',
		'#607466',
		'#435058'
		]
  }]
};

const dataPack1 =[1,3,2,2,5]
const dataPack2 =[3,4,2,3,1]
const dataPack3 =[1,4,5,3,5]


const companyData = {
  labels: ['Operations', 'Marketing', 'Finance and Administration',
           'OPG', 'Executive'],
  datasets: [
    {
      label: ["Complete"],
      backgroundColor: '#011638',
      data: dataPack1,
    },
    {
      label: ["Overdue"],
      backgroundColor: '#607466',
      data: dataPack2,
    },
    {
      label: ["Pending"],
      backgroundColor: '#435058',
      data: dataPack3,
    }
  ]
}


const objectiveOptions = {
  title:{
    display:true,
    text:'Objectives',
    fontSize:20,
    fontColor: '#011638'
  },
  legend:{
    display:false,
    position:'left'
  },
  maintainAspectRatio: true,
  responsive: true
}
const tacticOptions = {
  title:{
    display:true,
    text:'Tactics',
    fontSize:20,
    fontColor: '#011638'
  },
  legend:{
    display:false,
    position:'top'
  },
  maintainAspectRatio: true,
  responsive: true
}
const committeeObjectiveOptions = {
  title:{
    display:true,
    text:'Committee Objectives',
    fontSize:20,
    fontColor: '#011638'
  },
  legend:{
    display:false,
    position:'bottom'
  },
  maintainAspectRatio: true,
  responsive: true
}
const companyOptions = {
  title:{
    display:true,
    text:'Company Totals',
    fontSize:20
  },
  legend:{
    display:false,
    position:'right'
  },
  scales: {
    xAxes: [{
      stacked: true
    }],
    yAxes: [{
        stacked: true,
        ticks: {beginAtZero: true}
      }]
  }
}


const Dashboard = () =>{

  return(
    <div className='dashboards-container'>
      <div className='personal-dashboards'>
        <h2>Personal</h2>
        <div className='charts'>
          <div className='chart-container'>
            <Doughnut
              className='doughnut'
              data={objectiveData}
              options={objectiveOptions}
              />
            </div>
          <div className='chart-container'>
            <Doughnut
              className='doughnut'
              data={tacticData}
              options={tacticOptions}
              />
          </div>
          <div className='chart-container2'>
            <Doughnut
              className='doughnut'
              data={committeeObjectiveData}
              options={committeeObjectiveOptions}
              />
          </div>
        </div>
      </div>
      <div className='company-dashboard'>
        <h2>Company</h2>
        <div className='company-chart'>
          <Bar
            data={companyData}
            options={companyOptions}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;