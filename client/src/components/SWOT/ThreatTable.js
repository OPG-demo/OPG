import React, {useState, useEffect} from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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

const onDragEnd = (result) => {
  if (!result.destination) {
  return;
}

const items = reorder(
  data,
  result.source.index,
  result.destination.index
);

setData(items)
}

const handleSubmit = () =>{
  for(let i = 0; i < data.length; i++){
    axios
    .put(`http://localhost:8000/swot/${data[i].id}`, {priority: i + 1})
    .then(res =>{
      console.log('put req',res)
      window.location.reload()
      // setData(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
}
setData(data)
setActiveButton('show')
}

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
                  <div className='list-item'> <p>priority {item.priority}</p> <p>{item.element}</p><p>{item.division}</p></div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    </div>
  )
}

export default ThreatTable