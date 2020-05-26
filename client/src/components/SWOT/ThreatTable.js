import React from 'react'
import {Table} from 'semantic-ui-react'
import '../../scss/SituationAnalysis.scss'


const ThreatTable = () =>{

  const threatData= [
    {title: 'Test threat', priority: '1', division: 'Executive'},
    {title: 'Test threat2', priority: '2', division: 'Marketing'},
    {title: 'Test threat3', priority: '3', division: 'Executive'},
    {title: 'Test threat4', priority: '4', division: 'Operations'},
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
        {threatData.map(threat =>{
          return <Table.Row key={threat.title}>
            <Table.Cell className='cell'>{threat.priority}</Table.Cell>
            <Table.Cell className='cell'>{threat.title}</Table.Cell>
            <Table.Cell className='cell'>{threat.division}</Table.Cell>
        </Table.Row>
        })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default ThreatTable