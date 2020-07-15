import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'

const SuccessFactorForm = (props) =>{
  const [successFactor, setSuccessFactor] = useState()
  const [corecomp, setCorecomp] = useState([])
  const [division, setDivision] = useState([])
  const {register, handleSubmit, watch, errors} = useForm()

  const loggedInUser = parseInt(localStorage.getItem('user'))
  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  axios
  .get(`http://localhost:8000/corecomp/org/${loggedInUserOrg}`)
  .then(res =>{
    setCorecomp(res.data)
  })
  .catch(err =>{
    console.log(err)
  })

  axios
  .get(`http://localhost:8000/division/org/${loggedInUserOrg}`)
  .then(res =>{
    setDivision(res.data)
  })
  .catch(err =>{
    console.log(err)
  })

  const onSubmit = (successFactor) =>{
    axios
    .put(`http://localhost:8000/iskf/org/${loggedInUserOrg}`, successFactor)
    .then(res =>{
      props.history.push('/stateofcompany')
    })
    .catch(err =>{
      console.log(err)
    })
  }


  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className='input'
        name="priority"
        ref={register}
      />
      <input
        className='input'
        name="description"
        ref={register}
      />
      <select
        className='input'
        name="division"
        ref={register}
      >
        {division.map((x, div) =>{
          return(<option value={div.id}>{div.name}</option>)
        })}
      </select>
      
      <input type='submit'/>
    </form>
  )
}

export default SuccessFactorForm