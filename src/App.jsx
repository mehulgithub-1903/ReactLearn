import React ,{useState}from 'react'

const App = () => {


    const [cred, setcred] = useState({
        loginId:"",
        password:"",
    });   
 const runForm=(event)=>{
       event.preventDefault()
    }
    const ChangeInput=(event)=>{
        const value=event.target.value;
        const name=event.target.name;
         
            setcred((preVal)=>{
                
        if(name==="loginId")
        {
            return{
                loginId:value,
                password:preVal.password
            }
        }
        
        else if(name==="password"){
            return{
                loginId:preVal.loginId,
                password:value,
                
            }
    
        }
            })
        
    }

    
    
   
    return (
        <div>
            <form onSubmit={runForm}>
            <h1> Hello {cred.loginId} {cred.password}</h1>
            <input name="loginId" type="text" placeholder="Enter Your Name" onChange={ChangeInput} value={cred.loginId} /> 
            <br />
            <input name="password" type="text" placeholder="Enter Your Password" onChange={ChangeInput} value={cred.password
            } /> 
            <br />
            <button type="submit">Submit</button>
            </form>  
        </div>
    )
}

export default App;