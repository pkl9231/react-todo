import { DialogActions, DialogTitle, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ListComponents from "./ListComponents";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import Dialog from "@material-ui/core/Dialog";
import "./Todo.css";

const Todo = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeEvent = (event) => {
    setItem(event.target.value);
  };

  const getValue = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });

    setItem(""); // clear input
  };

  const clear_data = () => {
    setNewItem(() => {
      return [];
    });
    setOpen(false);
  };

  return (
    <>
      <div className="main-div">
        <div className="todo-div">
          <h1 id="todo_header">TODO LIST</h1>
          <div style={{ display: "inline" }}>
            <div style={{ display: "flex", padding: "40px" }}>
              <TextField
                id="input_item"
                placeholder="Add an Item"
                value={item}
                style={{}}
                onChange={onChangeEvent}
              />
              <Button onClick={getValue} style={{ marginLeft: "20px" }}>
                <AddCircleIcon fontSize="large" />
              </Button>

              <Button
                color="primary"
                disabled={newitem.length ? false : true}
                onClick={handleClickOpen}
              >
                <HighlightOffRoundedIcon fontSize="large" />
              </Button>

              <div>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Do you want to clear data?"}
                  </DialogTitle>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      No
                    </Button>
                    <Button onClick={clear_data} color="primary" autoFocus>
                      Yes
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </div>
            <div style={{width:"340px", height:"380px",overflow: "auto", paddingLeft:"40px" }}>
              <ol style={{ listStyle: "none"}}>
                {newitem.map((val, index) => {
                  return <ListComponents val={val} key={index} />;
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
