import React, {useState} from 'react'
import {Table} from 'semantic-ui-react'
import '../../scss/SituationAnalysis.scss'
import DraggableTableRow from './DraggableTableRow'


const StrengthTable = () =>{

  const [data, setData] = useState([      
    {title: 'Test strength', priority: '1', division: 'Executive'},
    {title: 'Test strength 2', priority: '2', division: 'Marketing'},
    {title: 'Test strength 3', priority: '3', division: 'Executive'},
    {title: 'Test strength 4', priority: '4', division: 'Operations'}
])

const swap =(a, b) => {
  let newData = data
  newData[a] = newData.splice(b, 1, newData[a])[0];
  setData([...data]);
}

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
        {data.map((strength, index) =>
          <DraggableTableRow key={strength.title} i={index} action={swap}>
            <Table.Cell className='cell'>{index + 1}</Table.Cell>
            <Table.Cell className='cell'>{strength.title}</Table.Cell>
            <Table.Cell className='cell'>{strength.division}</Table.Cell>
          </DraggableTableRow>
        )}
        </Table.Body>
      </Table>
    </div>
  )
}

export default StrengthTable