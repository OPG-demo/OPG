import React, {useState, useEffect} from 'react'
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import '../scss/Objectives.scss'
import axios from 'axios'
import {Link} from 'react-router-dom'


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
  const [tactic, setTactic] = useState([])
  const [corecomp, setCorecomp] = useState([])

  const loggedInUserOrg = parseInt(localStorage.getItem('org'))

  useEffect(() =>{
    axios
      .get(`http://localhost:8000/objective/org/${loggedInUserOrg}`)
      .then(res =>{
        setData(res.data)
        console.log(res.data)
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

useEffect(() =>{
  axios
  .get(`http://localhost:8000/user/org/${loggedInUserOrg}`)
  .then(res =>{
    setUser(res.data)
  })
  .catch(err =>{
    console.log(err)
  })
},[loggedInUserOrg])

useEffect(() =>{
  axios
  .get(`http://localhost:8000/swot/org/${loggedInUserOrg}`)
  .then(res =>{
    setSwot(res.data)
  })
  .catch(err =>{
    console.log(err)
  })
},[loggedInUserOrg])

useEffect(() =>{
  axios
  .get(`http://localhost:8000/tactic/org/${loggedInUserOrg}`)
  .then(res =>{
    setTactic(res.data)
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
                      <p>{item.due_date}</p>
                      <p>{item.updated_date}</p>
                      <p>{item.completed_date}</p>
                      {swot.map((x, swot_ref) =>{
                        if(x.id === item.swot_ref){
                          return(<p key={x.id}>{x.priority}: {x.element}</p>)
                        }
                      })}

                    <Link to={{pathname:'/editobjective', objectiveid: item.id, priority: item.priority, desc: item.description, division: item.div_id, responsible: item.responsible, swot: item.swot_ref}}>
                      <i className="fas fa-pen"></i>
                    </Link>

                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className='accordion-panel'>
                      <h3>Primary SWOT</h3>
                      {swot.map((x, swot_ref) =>{
                        if(x.id === item.swot_ref){
                          return(<p key={x.id}>{x.element}</p>)
                        }
                      })}
                      {tactic.map((x, index) =>{
                        if(x.obj_id === item.id){
                          return(
                            <div key={x.id} className="tactics">
                              <p>{index + 1}</p>
                              <p>{x.description}</p>
                              <p>{x.due_date}</p>
                              <p>{x.updated_date}</p>
                              <p>{x.completed_date}</p>
                            </div>
                          )
                        }
                      })}


                        {item.committee.map((x, index) =>{
                          return(<div key={index}>
                            {user.map((k, index) =>{
                              if(k.id === x){
                                return(<p key={k.id}>{k.fullname}</p>)
                              }
                            })}
                          </div>)
                        })}
                        {item.corecomp.map((x, index) =>{
                          return(<div key={index}>
                            {corecomp.map((k, index) =>{
                              if(k.id === x){
                                return(<p key={k.id}>{k.description}</p>)
                              }
                            })}
                          </div>)
                        })}
                    </div>
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