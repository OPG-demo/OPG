import React, {useState} from 'react'
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import '../scss/Objectives.scss'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Objectives = () =>{

  const [data, setData] = useState([      
    {description: 'Test threat', priority: '1', division: 'Executive', responsible: 'User1', due: '1/1/2020', update: '1/2/2020', completed: '1/3/2020', primaryswot: 'stuff'},
    {description: 'Test threat 2', priority: '2', division: 'Marketing', responsible: 'User2', due: '1/1/2020', update: '1/2/2020', completed: '1/3/2020', primaryswot: 'stuff'},
    {description: 'Test threat 3', priority: '3', division: 'Executive', responsible: 'User1', due: '1/1/2020', update: '1/2/2020', completed: '1/3/2020', primaryswot: 'stuff'},
    {description: 'Test threat 4', priority: '4', division: 'Operations', responsible: 'User3', due: '1/1/2020', update: '1/2/2020', completed: '1/3/2020', primaryswot: 'stuff'}
])

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
            <Draggable key={item.title} draggableId={item.title} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className='accordion-button'>
                      click <div className='accordion-heading'><p>{index +1}</p><p className='desc'>{item.description}</p><p>{item.responsible}</p><p>{item.division}</p><p>{item.due}</p><p>{item.update}</p><p>{item.completed}</p><p>{item.primaryswot}</p></div>
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