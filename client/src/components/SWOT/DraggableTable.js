import React, {useState} from "react";
import { Table } from "semantic-ui-react/";
import DraggableTableRow from "./DraggableTableRow";
//import "./semantic/dist/semantic.min.css";

const DraggableTable = () => {

  const [data, setData] = useState([      
    { name: "John", status: "approved", notes: "None" },
    { name: "Jamie", status: "approved", notes: "Requires Call" },
    { name: "Jill", status: "approved", notes: "None" }
])
console.log('data',data)

  const swap =(a, b) => {
    let newData = data
    newData[a] = newData.splice(b, 1, newData[a])[0];
    setData([...data]);
  }

    return (
      <div>
        <style>{`
          .draggable {
            cursor: move; /* fallback if grab cursor is unsupported */
            cursor: grab;
            cursor: -moz-grab;
            cursor: -webkit-grab;
          }
        `}</style>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map((obj, i) => (
              <DraggableTableRow key={i} i={i} action={swap}>
                <Table.Cell>{obj.name}</Table.Cell>
                <Table.Cell>{obj.status}</Table.Cell>
                <Table.Cell>{obj.notes}</Table.Cell>
              </DraggableTableRow>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }

  export default DraggableTable