import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const MissionStatement = () =>{
  const [mission, setMission] = useState()

  const loggedInUser = parseInt(localStorage.getItem('user'))
  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  useEffect(() =>{
    axios
      .get(`http://localhost:8000/org/${loggedInUserOrg}`)
      .then(res =>{
        setMission(res.data.mission)
        console.log(res)
      })
      .catch(err =>{
        console.log(err)
      })
  },[])


  return(
    <div className='mission-container'>
      <p>{mission}</p>
        <i class="fas fa-plus"></i>
      <i class="fas fa-pen"></i>
    </div>
  )
}

export default MissionStatement