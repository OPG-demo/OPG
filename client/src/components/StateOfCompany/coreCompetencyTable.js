import React, {useState, useEffect} from 'react'
import {Icon, Label, Menu, Table} from 'semantic-ui-react'
import axios from 'axios'

import '../../scss/StateOfCompany.scss'


const tableData = [
  {priority: 1, description: 'test', division: 'Executive', iksf: null, scope: 'Present'},
  {priority: 2, description: 'test2', division: 'Marketing', iksf: 2, scope: 'Present'},
  {priority: 3, description: 'test3', division: 'Executive', iksf: null, scope: 'Future'},
  {priority: 4, description: 'test4', division: 'Operations', iksf: null, scope: 'Present'},
]

const CoreCompetencyTable = (props) =>{
  const [corecomp, setCorecomp] = useState([])

  useEffect(() =>{
    axios
      .get(`http://localhost:8000/corecomp`)
      .then(res =>{
        setCorecomp(res.data)
        console.log('corecomp'. res.data)
      })
      .catch(err =>{
        console.log(err)
      })
  },[])

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