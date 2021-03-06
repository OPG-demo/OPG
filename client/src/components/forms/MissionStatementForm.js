import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Editor} from '@tinymce/tinymce-react'

const MissionStatementForm = (props) =>{
  const [mission, setMission] = useState()

  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  const handleChange = (e) =>{
    let change = e.target.getContent()
    setMission(change)
  }

  const handleSubmit = () =>{
    axios
    .put(`http://localhost:8000/org/${loggedInUserOrg}`, {mission})
    .then(res =>{
    })
    .catch(err =>{
      console.log(err)
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <Editor 
        onChange={handleChange} 
        name="mission" 
        apiKey="8agp2jq696z66uug592pmst899o8m7ea94eziv30fce48pyp" 
        value={mission} 
        initialValue={props.initial}
        init={{
          forced_root_block : '',
          force_br_newlines : true,
          force_p_newlines : false,
        }}
      />
      <button type='submit' value='Submit'>Save</button>
    </form>
  )
}

export default MissionStatementForm