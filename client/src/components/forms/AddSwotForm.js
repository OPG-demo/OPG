import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'

const AddSwotForm = (props) =>{
  const [swot, setSwot] = useState([])
  const [division, setDivision] = useState([])
  const {register, handleSubmit} = useForm()

  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  useEffect(() =>{
    axios
    .get(`http://localhost:8000/swot/org/${loggedInUserOrg}`)
    .then(res =>{
      setSwot(res.data)
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

  const onSubmit = (swot) =>{
    axios
    .post(`http://localhost:8000/swot`, swot)
    .then(res =>{
      console.log(res)
      props.history.push('/swot')
    })
    .catch(err =>{
      console.log(err)
    })
  }

  const handleCancel = () =>{
    props.history.push('/swot')
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
      <label>Title</label>
      <input
        className='input'
        name="element"
        ref={register}
      />
      <label>Division</label>
      <select
        className='input'
        name="division"
        ref={register}
      >
        {division.map((x, div) =>{
          return <option ref={register} key={x.id} value={x.id}>{x.name}</option>
        })}
      </select>
      <select
        className="input"
        name="type"
        ref={register}
        defaultValue={props.location.swottype}
      >
        <option ref={register} value="strength">Strength</option>
        <option ref={register} value="weakness">Weakness</option>
        <option ref={register} value="opportunity">Opportunity</option>
        <option ref={register} value="threat">Threat</option>
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

export default AddSwotForm