import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
const [note, setNote]=useState ({ 
    title:"",
    content:""
    });

    const [expanded,setExpanded]=useState(true)
    
       function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  } 
       

        function handleChange(event){
             const {name,value}=event.target;
            setNote(previnputText => {
            return {...previnputText,
                    [name]:value};
                    
            });
            };

function handleExpand(){
  setExpanded(false);
  }
  
  return (
    <div>
      <form className="create-note">

        {expanded? null:<input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />}
        
        <textarea onClick={handleExpand} name="content" placeholder="Take a note..." rows={expanded?1:3} onChange={handleChange} value={note.content}/>
        <Zoom in={!expanded}>
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
