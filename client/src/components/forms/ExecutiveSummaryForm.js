import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Editor} from '@tinymce/tinymce-react'

const ExecutiveSummaryForm = (props) =>{
  const [execsummary, setExecSummary] = useState()

  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  const handleChange = (e) =>{
    let change = e.target.getContent()
    setExecSummary(change)
  }

  const handleSubmit = () =>{
    axios
    .put(`http://localhost:8000/org/${loggedInUserOrg}`, {execsummary})
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
        name="execsummary" 
        apiKey="8agp2jq696z66uug592pmst899o8m7ea94eziv30fce48pyp" 
        value={execsummary} 
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

export default ExecutiveSummaryForm