import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'

const ExecutiveSummary = () =>{
  const [summary, setSummary] = useState()

  const loggedInUser = parseInt(localStorage.getItem('user'))
  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  useEffect(() =>{
    axios
      .get(`http://localhost:8000/org/${loggedInUserOrg}`)
      .then(res =>{
        setSummary(res.data.execsummary)
        console.log(res)
      })
      .catch(err =>{
        console.log(err)
      })
  },[])

  return(
    <div className='mission-container'>
      <p>{summary}</p>
    </div>
  )
}

export default ExecutiveSummary