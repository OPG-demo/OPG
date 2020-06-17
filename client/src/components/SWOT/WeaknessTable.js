import React, {useState} from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import '../../scss/SituationAnalysis.scss'


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const WeaknessTable = () =>{

  const [data, setData] = useState([      
    {title: 'Test weakness', priority: '1', division: 'Executive'},
    {title: 'Test weakness 2', priority: '2', division: 'Marketing'},
    {title: 'Test weakness 3', priority: '3', division: 'Executive'},
    {title: 'Test weakness 4', priority: '4', division: 'Operations'}
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
    <div className='list-header'><p>Priority</p><p>Title</p><p>Division</p></div>
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
                  <div className='list-item'> <p>priority {index + 1}</p> <p>{item.title}</p><p>{item.division}</p></div>
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

export default WeaknessTable