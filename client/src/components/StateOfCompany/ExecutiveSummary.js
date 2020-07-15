import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ExecutiveSummary = () =>{
  const [summary, setSummary] = useState()

  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  useEffect(() =>{
    axios
      .get(`http://localhost:8000/org/${loggedInUserOrg}`)
      .then(res =>{
        setSummary(res.data.execsummary)
      })
      .catch(err =>{
        console.log(err)
      })
  },[loggedInUserOrg])

  return(
    <div className='mission-container'>
      <p>{summary}</p>
    </div>
  )
}

export default ExecutiveSummary