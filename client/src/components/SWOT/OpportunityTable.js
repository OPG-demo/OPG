import React from 'react'
import {Table} from 'semantic-ui-react'
import '../../scss/SituationAnalysis.scss'


const OpportunityTable = () =>{

  const opportunityData= [
    {title: 'Test opportunity', priority: '1', division: 'Executive'},
    {title: 'Test opportunity2', priority: '2', division: 'Marketing'},
    {title: 'Test opportunity3', priority: '3', division: 'Executive'},
    {title: 'Test opportunity4', priority: '4', division: 'Operations'},
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
        {opportunityData.map(opportunity =>{
          return <Table.Row key={opportunity.title}>
            <Table.Cell className='cell'>{opportunity.priority}</Table.Cell>
            <Table.Cell className='cell'>{opportunity.title}</Table.Cell>
            <Table.Cell className='cell'>{opportunity.division}</Table.Cell>
        </Table.Row>
        })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default OpportunityTable