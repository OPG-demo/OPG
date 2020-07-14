import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'

const Login = (props) =>{
  const [credentials, setCredentials] = useState({
    username: "",
    pwdhash: ""
  })
  const {register, handleSubmit, watch, errors} = useForm()

  const onSubmit = (credentials) =>{
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


  return(
    <div className='login-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          name="username"
          placeholder="Username"
          ref={register({required: true})}
        />
        <input
          className="input"
          type="password"
          name="pwdhash"
          placeholder="Password"
          ref={register({required: true})}
        />
        <input type="submit" className='login-button'/>
      </form>
    </div>
  )
}

export default Login;
