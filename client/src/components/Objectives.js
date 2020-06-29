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

  const getDivName = (div_id) =>{
    axios
      .get(`http://localhost:8000/division/${div_id}`)
      .then(res =>{
        console.log('inside the call',res.data.name)
        return res.data.name
      })
      .catch(err =>{
        console.log(err)
      })
    }


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
                     <div className='accordion-heading'><p>{item.priority}</p><p className='desc'>{item.description}</p><p>{item.responsible}</p>

                    <div>{getDivName(item.div_id)}</div>
                    

                     <p>{item.due_date}</p><p>{item.updated_date}</p><p>{item.completed_date}</p><p>{item.swot_ref}</p></div>
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