import React, {useState, useEffect} from 'react'
import {Icon, Label, Menu, Table} from 'semantic-ui-react'

import '../../scss/StateOfCompany.scss'
import axios from 'axios'


const SuccessFactorTable = () =>{
  const [success, setSuccess] = useState([])
    
  useEffect(() =>{
    axios
      .get(`http://localhost:8000/iksf`)
      .then(res =>{
        setSuccess(res.data)
        console.log('success',res.data)
      })
      .catch(err =>{
        console.log(err)
      })
  },[])

  return(
    <div className='success-container'>
      <Table className='table'>
        <Table.Header>
          <Table.Row className='row'>
            <Table.HeaderCell className='cell' singleLine>Priority</Table.HeaderCell>
            <Table.HeaderCell className='cell' singleLine>Description</Table.HeaderCell>
            <Table.HeaderCell className='cell' singleLine>Division</Table.HeaderCell>
            <Table.HeaderCell className='cell' singleLine>CC Reference</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {success.map((item) =>
          <Table.Row key={item.id}>
            <Table.Cell className='cell'>{item.priority}</Table.Cell>
            <Table.Cell className='cell'>{item.description}</Table.Cell>
            <Table.Cell className='cell'>{item.div_id}</Table.Cell>
            <Table.Cell className='cell'>{item.corecomp}</Table.Cell>
          </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  )
}

export default SuccessFactorTable