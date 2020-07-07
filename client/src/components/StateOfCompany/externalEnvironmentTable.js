import React, {useState, useEffect} from 'react'
import {Card} from 'semantic-ui-react'
import axios from 'axios'

import '../../scss/StateOfCompany.scss'


const tableData = ['stuff', 'things', 'stuff', 'things', 'stuff', 'things',]
  

const ExternalEnvironmentTable = () =>{
  const [externalReview, setExternalReview] = useState()

  const loggedInUser = parseInt(localStorage.getItem('user'))
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