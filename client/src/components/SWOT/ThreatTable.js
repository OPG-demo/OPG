import React, {useState, useEffect} from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {Link} from 'react-router-dom'
import '../../scss/SituationAnalysis.scss'
import axios from 'axios'



const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const ThreatTable = () =>{

  const [data, setData] = useState([])
  const [activeButton, setActiveButton] = useState('hide')
  const [division, setDivision] = useState([])
  const loggedInUserOrg = parseInt(localStorage.getItem('org'))


  useEffect(() =>{
    axios
      .get(`http://localhost:8000/swot/org/${loggedInUserOrg}`)
      .then(res =>{
        setData(res.data.filter(function(type){
          return type.type === 'threat'
        }))
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

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      data,
      result.source.index,
      result.destination.index
    );
    console.log(items)
    setData(items)
    setActiveButton('show')
    console.log('button after drag', activeButton)
  }

  const handleSubmit = () =>{
    for(let i = 0; i < data.length; i++){
      console.log('inside for loop, before axios call', i)
      axios
      .put(`http://localhost:8000/swot/${data[i].id}`, {priority: i + 1})
      .then(res =>{
        console.log('inside the .then')
        window.location.reload()
        data.sort((a, b) => (a.priority > b.priority) ? 1 : -1)
        // setData(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
    }
    console.log('outside the for loop')
  }
  // window.location.reload()

  


  return(
    <div className='dnd-container'>
    <button onClick={handleSubmit} className={activeButton}>Save Changes</button>
    <div className='list-header'><p>Priority</p><p>Title</p><p>Division</p></div>
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {data.map((item, index) => (
              <Draggable key={item.id.toString()} draggableId={item.id.toString()} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                  <div className='list-item'>
                     <p>{item.priority}</p> 
                     <p>{item.element}</p>
                     {division.map((x, div) =>{
                      if(x.id === item.division){
                      return <p key={x.id}>{x.name}</p>
                      }
                    })}
                  </div>
                </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    <Link to='/addswot'>
      <i className="fas fa-plus"></i>
    </Link>
    </div>
  )
}

export default ThreatTable