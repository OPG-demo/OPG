import React, {useState, useEffect} from 'react'
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import '../scss/Objectives.scss'
import axios from 'axios'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Objectives = () =>{
  const [data, setData] = useState([])
  const [division, setDivision] = useState([])
  const [user, setUser] = useState([])
  const [swot, setSwot] = useState([])

  useEffect(() =>{
    axios
      .get(`http://localhost:8000/objective`)
      .then(res =>{
        setData(res.data)
        console.log(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
  },[])

useEffect(() =>{
    axios
    .get(`http://localhost:8000/division`)
    .then(res =>{
      setDivision(res.data)
      console.log(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
},[])

useEffect(() =>{
  axios
  .get(`http://localhost:8000/user`)
  .then(res =>{
    setUser(res.data)
    console.log(res.data)
  })
  .catch(err =>{
    console.log(err)
  })
},[])

useEffect(() =>{
  axios
  .get(`http://localhost:8000/swot`)
  .then(res =>{
    setSwot(res.data)
    console.log(res.data)
  })
  .catch(err =>{
    console.log(err)
  })
},[])


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

return(
  <div className='dnd-container'>
  <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
  <div className='list-header'><p>Priority</p><p>Description</p><p>Responsible</p><p>Division</p><p>Due</p><p>Update</p><p>Completed</p><p>Primary SWOT</p></div>
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
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className='accordion-button'>
                     <div className='accordion-heading'>
                      <p>{item.priority}</p>
                      <p className='desc'>{item.description}</p>
                      {user.map((x, responsible) =>{
                        if(x.id === item.responsible){
                          return(<p key={x.id}>{x.fullname}</p>)
                        } 
                      })}
                      {division.map((x, div_id) =>{
                        if(x.id === item.div_id){
                          return(<p key={x.id}>{x.name}</p>)
                        }
                      })}
                      {/* {GetDivName(item.div_id)} */}
                      <p>{item.due_date}</p>
                      <p>{item.updated_date}</p>
                      <p>{item.completed_date}</p>
                      {swot.map((x, swot_ref) =>{
                        if(x.id === item.swot_ref[0]){
                          return(<p key={x.id}>{x.priority}: {x.element}</p>)
                        }
                      })}



                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className='accordion-panel'><p>{index +1}</p><p className='desc'>{item.description}</p></div>
                  </AccordionItemPanel>
                </AccordionItem>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
  </Accordion>
  </div>
)
}

export default Objectives