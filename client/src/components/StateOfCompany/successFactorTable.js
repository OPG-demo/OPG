import React, {useState, useEffect} from 'react'
import {Table} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import '../../scss/StateOfCompany.scss'
import axios from 'axios'


const SuccessFactorTable = (props) =>{
  const [success, setSuccess] = useState([])
  const [corecomp, setCorecomp] = useState([])
  const [division, setDivision] = useState([])
  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  success.sort((a, b) => (a.priority > b.priority) ? 1 : -1)
    
  useEffect(() =>{
    axios
      .get(`http://localhost:8000/iksf/org/${loggedInUserOrg}`)
      .then(res =>{
        setSuccess(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
  },[loggedInUserOrg])

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
          <Table.Row key={item.id} successid={item.id}>
            <Table.Cell className='cell'>{item.priority}</Table.Cell>
            <Table.Cell className='cell'>{item.description}</Table.Cell>
            {division.map((x, div) =>{
              if(x.id === item.div_id){
                return <Table.Cell key={x.id} className='cell'>{x.name}</Table.Cell>
              }
            })}
            {corecomp.map((x, div) =>{
              if(x.id === item.corecomp){
                return <Table.Cell key={x.id}className='cell'>{x.description}</Table.Cell>
              }
            })}
            <Link to={{pathname:'/editsuccess', successid: item.id, priority: item.priority, desc: item.description, division: item.div_id, corecomp: item.corecomp}}>
              <i className="fas fa-pen"></i>
            </Link>
          </Table.Row>
          )}
        </Table.Body>
      </Table>
      <Link to='/addsuccess'>
            <i className="fas fa-plus"></i>
      </Link>
    </div>
  )
}

export default SuccessFactorTable