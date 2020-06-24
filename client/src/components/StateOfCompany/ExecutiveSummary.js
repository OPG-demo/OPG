import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'

const ExecutiveSummary = () =>{
  const [summary, setSummary] = useState()

  useEffect(() =>{
    axios
      .get(`http://localhost:8000/org/1`)
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