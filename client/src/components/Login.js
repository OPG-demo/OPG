import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Form, Field, withFormik} from 'formik'
import * as yup from 'yup'

const Login = ({errors, touched, values, status}) =>{
  const [credentials, setCredentials] = useState({
    username: "",
    pwdhash: ""
  })

  useEffect(() =>{
    if (status){
      setCredentials(credentials => status)
    }
  },[status])


  return(
    <div className='login-container'>
      <Form>
        <Field
          className="input"
          type="text"
          name="username"
          placeholder="Username"
        />
        {touched.username && errors.username && (
          <p className='error'>{errors.username}</p>
        )}
        <Field
          className="input"
          type="password"
          name="pwdhash"
          placeholder="Password"
        />
        {touched.pwdhash && errors.pwdhash && (
          <p className='error'>{errors.pwdhash}</p>
        )}
        <button type="submit" className='login-button'>Login</button>
      </Form>
    </div>
  )
}

const FormikLogin = withFormik({
  mapPropsToValues({username, pwdhash}){
    return{
      username: username || '',
      pwdhash: pwdhash || ''
    }
  },
  validationSchema: yup.object().shape({
    username: yup.string().required('Username is required'),
    pwdhash: yup.string().required('Password is required')
  }),
  handleSubmit(credentials, {props, setStatus}){
    axios
    .post(
      "http://localhost:8000/login",
      credentials
    )
    .then(res =>{
      localStorage.setItem('user', res.data.id)
      localStorage.setItem('org', res.data.org)
      console.log(res.data.id)
      localStorage.setItem("authorization", res.data.key)
      props.history.push('/dashboards')
    })
    .catch(err =>{
      console.log(err.response)
    })
  }
})(Login)

export default FormikLogin;
