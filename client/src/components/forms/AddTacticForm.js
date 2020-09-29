import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useForm, Controller} from 'react-hook-form'
import ReactDatepicker from 'react-datepicker'

const AddTacticForm = (props) =>{
  const [objective, setObjective] = useState([])
  const [tactic, setTactic] = useState([])
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


  const onSubmit = (tactic) =>{
    axios
    .post(`http://localhost:8000/tactic`, tactic)
    .then(res =>{
      console.log(res)
      props.history.push('/objectives')
    })
    .catch(err =>{
      console.log(err)
    })
  }

  const handleCancel = () =>{
    props.history.push('/objectives')
  }


  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Description</label>
      <input
        className='input'
        name="description"
        ref={register}
      />
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
      <input
        className='hidethis'
        name='obj_id'
        ref={register}
        defaultValue={props.location.obj_id}
      />
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

export default AddTacticForm