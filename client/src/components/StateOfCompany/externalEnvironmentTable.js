import React, {useState, useEffect} from 'react'
import {Card} from 'semantic-ui-react'
import axios from 'axios'

import '../../scss/StateOfCompany.scss'


const tableData = ['stuff', 'things', 'stuff', 'things', 'stuff', 'things',]
  

const ExternalEnvironmentTable = () =>{
  const [externalReview, setExternalReview] = useState()

  useEffect(() =>{
    axios
      .get(`http://localhost:8000/org/1`)
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