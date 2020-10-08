import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import MissionStatementForm from '../forms/MissionStatementForm'

const MissionStatement = () =>{
  const [mission, setMission] = useState()

  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  useEffect(() =>{
    axios
      .get(`http://localhost:8000/org/${loggedInUserOrg}`)
      .then(res =>{
        setMission(res.data.mission)
      })
      .catch(err =>{
        console.log(err)
      })
  },[loggedInUserOrg])


  return(
    <div className='mission-container'>
      <MissionStatementForm initial={mission}/>
    </div>
  )
}

export default MissionStatement