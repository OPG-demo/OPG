import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'

const EditSuccessFactorForm = (props) =>{
  const [corecomp, setCorecomp] = useState([])
  const [division, setDivision] = useState([])
  const {register, handleSubmit} = useForm()

  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  useEffect(() =>{
    axios
    .get(`http://localhost:8000/corecomp/org/${loggedInUserOrg}`)
    .then(res =>{
      setCorecomp(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[loggedInUserOrg])

  useEffect(() =>{
    axios
    .get(`http://localhost:8000/division/org/${loggedInUserOrg}`)
    .then(res =>{
      setDivision(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[loggedInUserOrg])


  const onSubmit = (data) =>{
    axios
    .put(`http://localhost:8000/iksf/${props.location.successid}`, data)
    .then(res =>{
      props.history.push('/stateofcompany')
    })
    .catch(err =>{
      console.log(err)
    })
  }

  const handleCancel = () =>{
    props.history.push('/stateofcompany')
  }


  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Priority</label>
      <input
        className='input'
        name="priority"
        ref={register}
        type="integer"
        defaultValue={props.location.priority}
      />
      <label>Description</label>
      <input
        className='input'
        name="description"
        ref={register}
        defaultValue={props.location.desc}
      />
      <label>Division</label>
      <select
        className='input'
        name="div_id"
        ref={register}
        defaultValue={props.location.division}
      >
        {division.map((x, div) =>{
          return <option ref={register} key={x.id} value={x.id}>{x.name}</option>
        })}
      </select>
      <label>CoreComp</label>
      <select
        className='input'
        name="corecomp"
        ref={register}
        defaultValue={props.location.corecomp}
      >
        {corecomp.map((x, div) =>{
          return <option ref={register} key={x.id} value={x.id}>{x.description}</option>
        })}
      </select>
      <input
        className='hidethis'
        name='org_id'
        ref={register}
        defaultValue={loggedInUserOrg}
      />
      <input type='submit'/>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  )
}

export default EditSuccessFactorForm