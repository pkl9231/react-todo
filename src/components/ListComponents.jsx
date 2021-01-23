import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import UndoIcon from '@material-ui/icons/Undo';

const ListComponents = ({ val }) => {
  const [line, setLine] = useState(false);
  const ShowLine = () => {
    setLine(true);
  };

  const HideLine = () => {
    setLine(false);
  };

  return (
    <>
      {val.length ? (
        <div 
          className="todo_style"
          style={{display: "flex", padding: "10px" , overflow:"auto" }}
        >
          <span onClick={ShowLine} id="deleteButton">
            <DeleteIcon />
          </span>
          <li style={{ textDecoration: line ? "line-through" : "none", paddingLeft:"10px"}}>
            {val}
          </li>
          <span onClick={HideLine} style={{paddingLeft:"10px"}}>
            <UndoIcon />
          </span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ListComponents;
