import React ,{useState}from 'react'

const App = () => {

    
    const [greet, setgreet] = useState("Hello");

    const [fname, setfname] = useState()

    const ChangeInput=(event)=>{
        console.log(event.target.value);
        setgreet(event.target.value); 
    }

    // here event is onchange target is input and value is the value of the input
    const ChangeValue=(event)=>{
        setfname(greet)
       
    }
    
    return (
        <div>
            <h1> Hello {fname}</h1>
            <input type="text" placeholder="Enter Your Name" onChange={ChangeInput} value={greet}/> 
            <button onClick={ChangeValue}>Submit</button>  
        </div>
    )
}

export default App
