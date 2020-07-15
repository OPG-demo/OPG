import React, {useState, useEffect} from 'react'
import {Table} from 'semantic-ui-react'
import axios from 'axios'

import '../../scss/StateOfCompany.scss'

const CoreCompetencyTable = (props) =>{
  const [corecomp, setCorecomp] = useState([])

  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  useEffect(() =>{
    axios
      .get(`http://localhost:8000/corecomp/org/${loggedInUserOrg}`)
      .then(res =>{
        setCorecomp(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
  },[loggedInUserOrg])

  return(
    <div className='competency-container'>
      <Table className='table'>
        <Table.Header>
          <Table.Row className='row'>
            <Table.HeaderCell className='cell' singleLine>Priority</Table.HeaderCell>
            <Table.HeaderCell className='cell' singleLine>Description</Table.HeaderCell>
            <Table.HeaderCell className='cell' singleLine>Division</Table.HeaderCell>
            <Table.HeaderCell className='cell' singleLine>IKSF</Table.HeaderCell>
            <Table.HeaderCell className='cell' singleLine>Scope</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {corecomp.map((item) =>
          <Table.Row key={item.id}>
            <Table.Cell className='cell'>{item.priority}</Table.Cell>
            <Table.Cell className='cell'>{item.description}</Table.Cell>
            <Table.Cell className='cell'>{item.div_id}</Table.Cell>
            <Table.Cell className='cell'>{item.iksf}</Table.Cell>
            <Table.Cell className='cell'>{item.scope}</Table.Cell>
          </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  )
}

export default CoreCompetencyTable