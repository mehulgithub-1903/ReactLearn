import React ,{useState}from 'react'

const App = () => {


    const [cred, setcred] = useState({
        loginId:"",
        password:"",
        email:"",
        phone:"",
    });  
   
 const runForm=(event)=>{
       event.preventDefault()
    
    }
    const ChangeInput=(event)=>{
      const {value,name}=event.target;
         
            setcred((preVal)=>{
                return{
                    ...preVal,
                    [name]:value,
                }
       /*
       The square bracket is used to get the name of the event target and set the value to the state. 
       For example, if the email field is changed - it fetches the email value and 
       sets it to the state (state object/email value) and does the same to the password as well.
       */
            })
        
    }

    
    
   
    return (
        <div>
            <form onSubmit={runForm}>
            <h1>H E L L O</h1>
            <ol>
                <li>{cred.loginId}</li>
                <li>{cred.password}</li>
                <li>{cred.email}</li>
                <li>{cred.phone}</li>
            </ol>
            <input name="loginId" type="text" placeholder="Enter Your Name" onChange={ChangeInput} value={cred.loginId} /> 
            <br />
            <input name="password" type="text" placeholder="Enter Your Password" onChange={ChangeInput} value={cred.password
            } /> 
            <br />
            <input name="email" type="email" placeholder="Enter Your email" onChange={ChangeInput} value={cred.email
            } /> 
            <br />
            <input name="phone" type="number" placeholder="Enter Your phone" onChange={ChangeInput} value={cred.phone
            } /> 
            <br />
            <button type="submit">Submit</button>
            </form>  
        </div>
    )
}

export default App;