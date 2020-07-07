import React, {useState, useEffect} from 'react'
import '../scss/Dashboard.scss'
import {Pie, Doughnut, Bar} from 'react-chartjs-2'
import axios from 'axios'



const Dashboard = () =>{
  const [objective, setObjective] = useState([])
  const [tactic, setTactic] = useState([])

  const loggedInUser = parseInt(localStorage.getItem('user'))

  const today = new Date

  useEffect(() =>{
    axios
      .get(`http://localhost:8000/objective`)
      .then(res =>{
        setObjective(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
  },[])

  useEffect(() =>{
    axios
      .get(`http://localhost:8000/tactic`)
      .then(res =>{
        setTactic(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
  },[])

  const completeObjectives = []
  const overdueObjectives = []
  const pendingObjectives = []
  const incompleteObjectives = []
  const userObjectives = []

  objective.map((i, index) =>{
    if(i.responsible === loggedInUser){
      userObjectives.push(i)
      if(i.completed_date !== null){
        completeObjectives.push(i)
      } else if(i.due_date === null && i.updated_date === null && i.completed_date === null){
        incompleteObjectives.push(i)
      } else if(i.due_date > today.toISOString() || i.updated_date > today.toISOString()){
        pendingObjectives.push(i)
      } else {
        overdueObjectives.push(i)
      }
    }
  })

  const objectiveData = {
    labels: [
      'Complete',
      'Overdue',
      'Pending',
      'Incomplete'
    ],
    datasets: [{
      data: [completeObjectives.length, overdueObjectives.length, pendingObjectives.length, incompleteObjectives.length],
      backgroundColor: [
      '#011638',
      '#607466',
      '#435058'
      ]
    }]
  
  };

  const completeTactic = []
  const overdueTactic = []
  const pendingTactic = []
  const incompleteTactic = []

  userObjectives.map((x, index) =>{
    tactic.map((i, index) =>{
      if(x.id === i.obj_id){
        if(i.completed_date !== null){
          completeTactic.push(i)
        } else if(i.due_date === null && i.updated_date === null && i.completed_date === null){
          incompleteTactic.push(i)
        } else if(i.due_date > today.toISOString() || i.updated_date > today.toISOString()){
          pendingTactic.push(i)
        } else {
          overdueTactic.push(i)
        }
      }
    })
  })


  const tacticData = {
    labels: [
      'Complete',
      'Overdue',
      'Pending',
      'Incomplete'
    ],
    datasets: [{
      data: [completeTactic.length, overdueTactic.length, pendingTactic.length, incompleteTactic.length],
      backgroundColor: [
      '#011638',
      '#607466',
      '#435058'
      ]
    }]
  };

  const completeCommittee = []
  const overdueCommittee = []
  const pendingCommittee = []
  const incompleteCommittee = []

  objective.map((x, index) =>{
    x.committee.map((i, index) =>{
      if(i === loggedInUser){
        if(x.completed_date !== null){
          completeCommittee.push(x)
        } else if(x.due_date === null && x.updated_date === null && x.completed_date === null){
          incompleteCommittee.push(x)
        } else if(x.due_date > today.toISOString() || x.updated_date > today.toISOString()){
          pendingCommittee.push(x)
        } else {
          overdueCommittee.push(x)
        }
      }
    })
  })

  const committeeObjectiveData = {
    labels: [
      'Complete',
      'Overdue',
      'Pending',
      'Incomplete'
    ],
    datasets: [{
      data: [completeCommittee.length, overdueCommittee.length, pendingCommittee.length, incompleteCommittee.length],
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