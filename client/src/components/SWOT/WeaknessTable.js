import React from 'react'
import {Table} from 'semantic-ui-react'
import '../../scss/SituationAnalysis.scss'


const WeaknessTable = () =>{

  const weaknessData= [
    {title: 'Test weakness', priority: '1', division: 'Executive'},
    {title: 'Test weakness2', priority: '2', division: 'Marketing'},
    {title: 'Test weakness3', priority: '3', division: 'Executive'},
    {title: 'Test weakness4', priority: '4', division: 'Operations'},
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
        {weaknessData.map(weakness =>{
          return <Table.Row key={weakness.title}>
            <Table.Cell className='cell'>{weakness.priority}</Table.Cell>
            <Table.Cell className='cell'>{weakness.title}</Table.Cell>
            <Table.Cell className='cell'>{weakness.division}</Table.Cell>
        </Table.Row>
        })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default WeaknessTable