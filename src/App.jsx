import React,{useState,useEffect} from 'react'

const App = () => {


    const [name, setName] = useState(0);
    const [num, setNum] = useState(0)
     useEffect(()=>{
         alert("Hello")
        })

        /*use effect gets triggered after render function in index
            useEffect(()=>{
                alert("Hello")
                },[])
        --> sirf pheli baar render hone pe useEffect Chalega 
            useEffect(()=>{
                alert("Hello")
                },[num])
        --> num ki value change hone pe hi chalega 

        */
    
    return (
        <div>
        <button onClick={()=>{
            setName(name+1)
        }}>Click me {name}</button>
         <button onClick={()=>{
            setNum(num+1)
        }}>Click me {num}</button>
        </div>
    )
}

export default App
