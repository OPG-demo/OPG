import React from 'react'
import {Table} from 'semantic-ui-react'
import '../../scss/SituationAnalysis.scss'


const StrengthTable = () =>{

  const strengthData= [
    {title: 'Test strength', priority: '1', division: 'Executive'},
    {title: 'Test strength2', priority: '2', division: 'Marketing'},
    {title: 'Test strength3', priority: '3', division: 'Executive'},
    {title: 'Test strength4', priority: '4', division: 'Operations'},
  ]
  return(
    <div className='table-container'>
      <Table className='table'>
        <Table.Header className='header'>
          <Table.Row className='row'>
            <Table.HeaderCell className='headercell' singleLine>Priority</Table.HeaderCell>
            <Table.HeaderCell className='headercell' singleLine>Title</Table.HeaderCell>
            <Table.HeaderCell className='headercell' singleLine>Division</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {strengthData.map((strength) =>
          <Table.Row key={strength.title}>
            <Table.Cell className='cell'>{strength.priority}</Table.Cell>
            <Table.Cell className='cell'>{strength.title}</Table.Cell>
            <Table.Cell className='cell'>{strength.division}</Table.Cell>
          </Table.Row>
        )}
        </Table.Body>
      </Table>
    </div>
  )
}

export default StrengthTable