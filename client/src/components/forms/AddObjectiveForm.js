import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useForm, Controller} from 'react-hook-form'
import ReactDatepicker from 'react-datepicker'
import { useParams } from 'react-router-dom'

const AddObjectiveForm = (props) =>{
  const [objective, setObjective] = useState([])
  const [user, setUser] = useState([])
  const [division, setDivision] = useState([])
  const [swot, setSwot] = useState([])
  const {register, handleSubmit, control} = useForm()

  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  useEffect(() =>{
    axios
    .get(`http://localhost:8000/objective/org/${loggedInUserOrg}`)
    .then(res =>{
      setObjective(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[loggedInUserOrg])

  useEffect(() =>{
    axios
    .get(`http://localhost:8000/user/org/${loggedInUserOrg}`)
    .then(res =>{
      setUser(res.data)
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


  const onSubmit = (objective) =>{
    axios
    .post(`http://localhost:8000/objective`, objective)
    .then(res =>{
      console.log(res)
      props.history.push('/objectives')
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
      <label>Description</label>
      <input
        className='input'
        name="description"
        ref={register}
      />
      <label>Responsible</label>
      <select
        className='input'
        name="responsible"
        ref={register}
      >
        {user.map((x, div) =>{
          return <option ref={register} key={x.id} value={x.id}>{x.fullname}</option>
        })}
      </select>
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
      <label>Due Date</label>
      <Controller
        control={control}
        name="due_date"
        // ref={register}
        render={(props) =>(
          <ReactDatepicker
          className="input"
          placeholderText="Select date"
          onChange={(e) => props.onChange(e)}
          selected={props.value}
          />
        )}
        />
      <label>Updated Date</label>
      <Controller
        control={control}
        name="updated_date"
        // ref={register}
        render={(props) =>(
          <ReactDatepicker
          className="input"
          placeholderText="Select date"
          onChange={(e) => props.onChange(e)}
          selected={props.value}
          />
        )}
        />

      <label>Completed Date</label>
      <Controller
        control={control}
        name="completed_date"
        // ref={register}
        render={(props) =>(
          <ReactDatepicker
          className="input"
          placeholderText="Select date"
          onChange={(e) => props.onChange(e)}
          selected={props.value}
          />
        )}
        />

      <label>Primary SWOT</label>
      <select
        className='input'
        name="swot_ref"
        ref={register}
      >
        {swot.map((x, div) =>{
          return <option ref={register} key={x.id} value={x.id}>{x.element}</option>
        })}
      </select>

      <fieldset>
        <legend>Committee</legend>
        {user.map((x, div) =>{
          return <label key={x.id}><input type="checkbox" ref={register} name="committee" value={x.id}/>{x.fullname}</label>
        })}
      </fieldset>

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

export default AddObjectiveForm