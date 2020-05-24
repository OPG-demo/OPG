import React, {useState} from 'react'
import {Icon, Label, Menu, Table} from 'semantic-ui-react'

import '../../scss/StateOfCompany.scss'


const tableData = [
  {priority: 1, description: 'test', division: 'Executive', ccreference: null},
  {priority: 4, description: 'test4', division: 'Marketing', ccreference: null},
  {priority: 2, description: 'test2', division: 'Executive', ccreference: 1},
  {priority: 3, description: 'test3', division: 'Operations', ccreference: null},
]

const SuccessFactorTable = () =>{

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
          {tableData.map((item) =>
          <Table.Row key={item.description}>
            <Table.Cell className='cell'>{item.priority}</Table.Cell>
            <Table.Cell className='cell'>{item.description}</Table.Cell>
            <Table.Cell className='cell'>{item.division}</Table.Cell>
            <Table.Cell className='cell'>{item.ccreference}</Table.Cell>
          </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  )
}

export default SuccessFactorTable