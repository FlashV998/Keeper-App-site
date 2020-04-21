import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

import Zoom from '@material-ui/core/Zoom';

function Note(props) {
  function handleClick(){
       props.onDelete(props.id);  //bcoz you're accessing a function
      }

  return (
      
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true}>
      <Fab onClick={handleClick}><DeleteIcon/></Fab>
      </Zoom>
    </div>
  );
}

export default Note;
