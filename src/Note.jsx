import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
const Note = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className="btn" onClick={()=>props.deleteItem(props.ind)}><DeleteIcon></DeleteIcon></button>
              
        </div>
    )
}

export default Note 