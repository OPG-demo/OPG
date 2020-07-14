import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Form, Field, withFormik} from 'formik'
import * as yup from 'yup'
import MissionStatement from '../stateOfCompany/MissionStatement'

const MissionStatementAddForm = ({errors, touched, values, status}) =>{
  const [missionStatement, setMissionStatement] = useState()
  const [initial, setInitial] = useState()

  const loggedInUser = parseInt(localStorage.getItem('user'))
  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  useEffect(() =>{
    if (status){
      setMissionStatement([...missionStatement, status])
    }
  },[status])

  axios
  .get(`http://localhost:8000/org/${loggedInUserOrg}`)
  .then(res =>{
    setInitial(res.data.mission)
    console.log(res.data.mission)
  })
  .catch(err =>{
    console.log(err)
  })


  return(
    <Form>
      <Field
        as="textarea"
        className='input'
        type="textarea"
        name="mission"
      />
      <button type='submit'>Submit</button>
    </Form>
  )
}

const FormikMissionStatementAddForm = withFormik({
  mapPropsToValues({mission}){
    return{
      mission: mission || 'stuff'
    }
  },

  handleSubmit(missionStatement, {props, setStatus}){
    const loggedInUserOrg = parseInt(localStorage.getItem('org'))

    axios
    .put(`http://localhost:8000/org/${loggedInUserOrg}`, missionStatement)
    .then(res =>{
      props.history.push('/stateofcompany')
    })
    .catch(err =>{
      console.log(err)
    })
  }
})(MissionStatementAddForm)

export default FormikMissionStatementAddForm