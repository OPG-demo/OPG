import React, {useState, useEffect} from 'react'
import axios from 'axios'

const MissionStatementForm = props =>{
  const [missionStatement, setMissionStatement] = useState()

  const handleSubmit = e =>{
    e.preventDefault()
    axios
      .put(`http://localhost:8000/org/${props.match.params.id}`)
      .then(res =>{
        console.log(JSON.parse(res.config.data))
      })
      .catch(err =>{
        console.log(err)
      })
  }

  const handleChanges = e =>{
    e.preventDefault()
    setMissionStatement({...missionStatement, [e.target.name]: e.target.value})
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        type="textarea"
        placeholder={missionStatement}
        name="mission"
        onChange={handleChanges}
      />
    </form>
  )
}

export default MissionStatementForm