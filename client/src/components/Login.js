import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Login = props =>{
  const [credentials, setCredentials] = useState({
    username: "",
    pwdhash: ""
  })

  const headers = {
    "Content-Type": "application/json"
  }

  const handleSubmit = e =>{
    e.preventDefault()
    axios
      .post(
        "http://localhost:8000/login",
        credentials,
        headers
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
        setCredentials({
          username: "",
          pwdhash: ""
        })
      })
  }

  const handleChange = e =>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return(
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="pwdhash"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;
