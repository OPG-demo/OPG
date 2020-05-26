import React, {useState} from "react";
import { Table } from "semantic-ui-react/";

const DraggableTableRow= (props) => {
  const onDragStart = (ev, i) => {
    ev.dataTransfer.setData("index", i);
  };

  const onDragOver = ev => {
    ev.preventDefault();
  };

  const onDrop = (ev, a) => {
    let b = ev.dataTransfer.getData("index");
    props.action(parseInt(a, 10), parseInt(b, 10));
  };

    return (
      <Table.Row
        draggable
        className="draggable"
        onDragStart={e => onDragStart(e, props.i)}
        onDragOver={e => onDragOver(e)}
        onDrop={e => {
          onDrop(e, props.i);
        }}
      >
        {props.children}
      </Table.Row>
    );
  }


export default DraggableTableRow;