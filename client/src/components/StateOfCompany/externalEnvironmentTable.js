import React, {useState} from 'react'
import {Card} from 'semantic-ui-react'

import '../../scss/StateOfCompany.scss'


const tableData = ['stuff', 'things', 'stuff', 'things', 'stuff', 'things',]
  

const ExternalEnvironmentTable = () =>{

  return(
    <div className='environments-container'>
      <div className='card'>
        <Card>
          <Card.Content>
            <Card.Header className='header'>Possible Business Threats</Card.Header>
            <Card.Description>
              {tableData.map((item) =>
              <ul>
                <li>{item}</li>
              </ul>
              )}
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
      <div className='card'>
        <Card>
          <Card.Content>
            <Card.Header className='header'>Market Shifts</Card.Header>
            <Card.Description>
              {tableData.map((item) =>
              <ul>
                <li>{item}</li>
              </ul>
              )}
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    </div>
  )
}

export default ExternalEnvironmentTable