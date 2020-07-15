import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

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

  const MissionRender = () =>{
    if(mission === null){
      return(<div>
        <p>Add a mission statment</p>
        <Link to='/addmission'>
        <i className="fas fa-plus"></i></Link></div>)
    } else {
      return(<div>
        <p>{mission}</p>
        <Link to='/addmission'>
        <i className="fas fa-pen"></i></Link>
      </div>)
    }
  }


  return(
    <div className='mission-container'>
      <MissionRender/>
    </div>
  )
}

export default MissionStatement