import React, {useState, useEffect} from 'react'
import axios from 'axios'

const MissionStatementAddForm = props =>{
  const [missionStatement, setMissionStatement] = useState()

  const loggedInUser = parseInt(localStorage.getItem('user'))
  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  const handleSubmit = e =>{
    e.preventDefault()
    axios
      .post(`http://localhost:8000/org/${loggedInUserOrg}`)
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
      <button type='submit'>Add</button>
    </form>
  )
}

export default MissionStatementAddForm