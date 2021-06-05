import React ,{useState}from 'react'
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TodoListRender from './TodoListRender'

const TodoList = () => {


    const [task, setTask] = useState()
    const [Items, setItems] = useState([])

    const UpdateTask=(event)=>{
        setTask(event.target.value)

    }

 
    const TaskAdd=()=>{
        setItems((oldItems)=>{
            return [...oldItems,task]
        })
        setTask("")
    }

    // const DeleteItems=(id)=>{
    //     setItems((oldItems)=>{  
    //         return oldItems.filter((e,index)=>{
    //            return index!==id                
    //         })
    //     })
    // }
    
    return (
        
        <div>
            <h1> TodoList</h1>
            <br />
            <input type="text" name="task" placeholder="Add Task" onChange={UpdateTask} value={task} />
            <Button onClick={TaskAdd} color="secondary"> <AddCircleIcon></AddCircleIcon></Button>
            {Items.map((e,index)=>{
               return <TodoListRender
                id={index} 
               key={index} 
               text={e}
            //    onSelect={DeleteItems}    
               />
           })}
        </div>
    )
}

export default TodoList
