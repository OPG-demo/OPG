import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'

const MissionStatementForm = (props) =>{
  const [initial, setInitial] = useState()
  const {register, handleSubmit} = useForm()

  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  useEffect(() =>{
    axios
    .get(`http://localhost:8000/org/${loggedInUserOrg}`)
    .then(res =>{
      setInitial(res.data.mission)
    })
    .catch(err =>{
      console.log(err)
    })
  },[loggedInUserOrg])


  const onSubmit = (missionStatement) =>{
    axios
    .put(`http://localhost:8000/org/${loggedInUserOrg}`, missionStatement)
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
        name="mission"
        defaultValue={initial}
        ref={register}
      />
      <input type='submit'/>
    </form>
  )
}

export default MissionStatementForm