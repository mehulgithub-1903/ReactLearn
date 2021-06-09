import React ,{useState}from 'react'
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Input } from '@material-ui/core';
const CreateNote = (props) => {

    const [note, setNote] = useState({
        title:"",
        content:"",
    });

    const UpdateNote=(event)=>{
        const {value,name}=event.target;
  
              setNote((preVal)=>{
                  return{
                      ...preVal,
                      [name]:value,
                  }
        
              })
            }

     const design={
         "backgroundColor":"Black",
         "color":"white"
     }
    return (
        <div>
            <form action="">
            <Input style={design} name="title" type="text" onChange={UpdateNote} value={note.title} placeholder="title" />
                {/* <input  name="title" type="text" onChange={UpdateNote} value={note.title} placeholder="title" /> */}
                <TextareaAutosize name="content" id="" cols="" rows="" onChange={UpdateNote} value={note.content} placeholder="Right A Note" />
                {/* <textarea name="content" id="" cols="" rows="" onChange={UpdateNote} value={note.content} placeholder="Right A Note"></textarea> */}
                <Button onClick={()=>{props.passNote(note)}} color="secondary">➕</Button>

 
            </form>
        </div>
    )
}
    
export default CreateNote
