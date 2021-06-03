import React,{useState} from 'react'
import TodoList from './components/TodoList'
const App = () =>{


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

    const DeleteItems=(id)=>{
        setItems((oldItems)=>{  
            return oldItems.filter((e,index)=>{
               return index!==id                
            })
        })
    }


    return (
        
        
        <div>
            
        <h1>Todo List</h1>
        
        <input type="text" name="task" placeholder="Add Task" onChange={UpdateTask} value={task} />
        <button onClick={TaskAdd}>➕</button>   

        
           {Items.map((e,index)=>{
               return <TodoList
                id={index} 
               key={index} 
               text={e}
               onSelect={DeleteItems}    
               />
           })}
        </div>
    )
}

export default App
