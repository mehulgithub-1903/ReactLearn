import React ,{useState}from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const TodoListRender = (props) => {

        const [line, setLine] = useState(false);

        const cutIt=()=>{   
            setLine(true)
        }

    return (
        <div> 
        
            <li style={{textDecoration :line?"line-through":"none"}}>
            <button><span onClick={cutIt}>
                    <DeleteForeverIcon/>
                
                    </span></button> 
            {props.text}
            </li>
                      
        </div>
    )
}

export default TodoListRender
