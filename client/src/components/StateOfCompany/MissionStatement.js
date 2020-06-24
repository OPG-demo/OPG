import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'

const MissionStatement = () =>{
  const [mission, setMission] = useState()

  useEffect(() =>{
    axios
      .get(`http://localhost:8000/org/1`)
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
    </div>
  )
}

export default MissionStatement