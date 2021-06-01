import React ,{useState}from 'react'

const App = () => {


    const [Name, setName] = useState()
    const [pass, setPass] = useState()
    const [fName, setfName] = useState()
    const runForm=(event)=>{
        event.preventDefault();
        setfName(Name)
        alert(pass)
    }
    const ChangeName=(event)=>{
        setName(event.target.value); 
    }

    const ChangePass=(event)=>{
        setPass(event.target.value)

    }
    
   
    return (
        <div>
            <form onSubmit={runForm}>
            <h1> Hello {fName}</h1>
            <input type="text" placeholder="Enter Your Name" onChange={ChangeName} value={Name} /> 
            <input type="text" placeholder="Enter Your Password" onChange={ChangePass} value={pass} /> 
            <button type="submit">Submit</button>
            </form>  
        </div>
    )
}

export default App;