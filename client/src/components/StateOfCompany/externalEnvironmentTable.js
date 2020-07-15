import React, {useState, useEffect} from 'react'
import axios from 'axios'

import '../../scss/StateOfCompany.scss'
  

const ExternalEnvironmentTable = () =>{
  const [externalReview, setExternalReview] = useState()

  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  useEffect(() =>{
    axios
      .get(`http://localhost:8000/org/${loggedInUserOrg}`)
      .then(res =>{
        setExternalReview(res.data.eereview)
      })
      .catch(err =>{
        console.log(err)
      })
  })

  return(
    <div className='environments-container'>
      <p>{externalReview}</p>
    </div>
  )
}

export default ExternalEnvironmentTable