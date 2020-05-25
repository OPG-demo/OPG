import React from 'react'
import {Card} from 'semantic-ui-react'
import '../../scss/SituationAnalysis.scss'


const StrengthCard = (props) =>{
  return(
    <div>
      <Card className='card'>
        <Card.Content>
          <Card.Header className='card-title'>{props.title}</Card.Header>
          <Card.Meta className='card-priority'>Priority: {props.priority}</Card.Meta>
          <Card.Meta className='card-division'>Division: {props.division}</Card.Meta>
        </Card.Content>
      </Card>
    </div>
  )
}

export default StrengthCard