import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'

const AddCoreCompForm = (props) =>{
  const [iksf, setIksf] = useState([])
  const [division, setDivision] = useState([])
  const {register, handleSubmit} = useForm()

  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  useEffect(() =>{
    axios
    .get(`http://localhost:8000/iksf/org/${loggedInUserOrg}`)
    .then(res =>{
      setIksf(res.data)
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
    .post(`http://localhost:8000/corecomp`, data)
    .then(res =>{
      console.log(res)
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
        type="number"
      />
      <label>Description</label>
      <input
        className='input'
        name="description"
        ref={register}
      />
      <label>Division</label>
      <select
        className='input'
        name="div_id"
        ref={register}
      >
        {division.map((x, div) =>{
          return <option ref={register} key={x.id} value={x.id}>{x.name}</option>
        })}
      </select>
      <label>IKSF</label>
      <select
        className='input'
        name="iksf_id"
        ref={register}
      >
        {iksf.map((x, div) =>{
          return <option ref={register} key={x.id} value={x.id}>{x.description}</option>
        })}
      </select>
      <label>Scope</label>
      <select
        className='input'
        name="scope"
        ref={register}
      >
        <option value="present">present</option>
        <option value="future">future</option>
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

export default AddCoreCompForm