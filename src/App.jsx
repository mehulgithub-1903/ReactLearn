import React,{useState,useEffect} from 'react'

const App = () => {


   
    const [num, setNum] = useState(0)
   
    useEffect(()=>{
        document.title=`You clicked me ${num} times`
    })
    return (
        <div>
        <button onClick={()=>{
            setNum(num+1)
        }}>Click me {num}</button>
        
        </div>
    )
}

export default App
