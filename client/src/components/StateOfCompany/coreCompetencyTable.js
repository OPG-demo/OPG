import React, {useState, useEffect} from 'react'
import {Table} from 'semantic-ui-react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import '../../scss/StateOfCompany.scss'

const CoreCompetencyTable = (props) =>{
  const [corecomp, setCorecomp] = useState([])
  const [division, setDivision] = useState([])

  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  corecomp.sort((a, b) => (a.priority > b.priority) ? 1 : -1)


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

  useEffect(() =>{
    axios
    .get(`http://localhost:8000/division/org/${loggedInUserOrg}`)
    .then(res =>{
      setDivision(res.data)
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
            {division.map((x, div) =>{
              if(x.id === item.div_id){
                return <Table.Cell key={x.id} className='cell'>{x.name}</Table.Cell>
              }
            })}
            <Table.Cell className='cell'>{item.iksf}</Table.Cell>
            <Table.Cell className='cell'>{item.scope}</Table.Cell>
            <Link to={{pathname:'/editcorecomp', ccid: item.id, priority: item.priority, desc: item.description, division: item.div_id, scope: item.scope}}>
              <i className="fas fa-pen"></i>
            </Link>
          </Table.Row>
          )}
        </Table.Body>
      </Table>
      <Link to='/addcorecomp'>
            <i className="fas fa-plus"></i>
      </Link>
    </div>
  )
}

export default CoreCompetencyTable