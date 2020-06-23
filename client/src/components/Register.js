import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Register = props =>{

  const [credentials, setCredentials] = useState({
    org_id: 1,
    fullname: "",
    username: "",
    email: "",
    pwdhash: "",
    isadmin: false,
    superuser: false
  })

  const headers = {
    "Content-Type": "application/json"
  }

  const checkPasswordMatch = (input1, input2) =>{
    if(input1.value !== input2.value){
      console.log("passwords do not match")
    }
  }

  const handleSubmit = e =>{
    e.preventDefault()
    axios
      .post(
        "http://localhost:8000/register",
        credentials,
        headers
      )
      .then(res =>{
        localStorage.setItem('authorization', res.data.key)
        props.history.push('/dashboards')
      })
      .catch(err =>{
        console.log(err)
        setCredentials({
          org_id: 1,
          fullname: "",
          username: "",
          email: "",
          pwdhash: "",
          isadmin: false,
          superuser: false
        })
      })
  }

  const handleChange = e =>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return(
    <div className='register-container'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Full Name'
          name='fullname'
          onChange={handleChange}
        />
                        <input
          type='text'
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
                <input
          type='text'
          placeholder='Username'
          name='username'
          onChange={handleChange}
        />
                <input
          type='password'
          placeholder='Password'
          name='pwdhash'
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register