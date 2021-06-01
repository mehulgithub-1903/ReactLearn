import React ,{useState}from 'react'

const App = () => {


    const [cred, setcred] = useState({
        loginId:"",
        password:"",
        email:"",
        phone:"",
    });  
    //  const [credO, setcredO] = useState({
    //     loginId:"",
    //     password:"",
    //     email:"",
    // });
 const runForm=(event)=>{
       event.preventDefault()
    //    setcredO({
    //     loginId:cred.loginId,
    //     password:cred.password,
    //     email:cred.email,
    //    })
    }
    const ChangeInput=(event)=>{
      const {value,name}=event.target;
         
            setcred((preVal)=>{
                
        if(name==="loginId")
        {
            return{
                loginId:value,
                password:preVal.password,
                email:preVal.email,
                phone:preVal.phone,
            }
        }
        
        else if(name==="password"){
            return{
                loginId:preVal.loginId,
                password:value,
                email:preVal.email,
                phone:preVal.phone,
            }
    
        }else if(name==="email"){
            return{
                loginId:preVal.loginId,
                password:preVal.password,
                email:value,
                phone:preVal.phone,
            }
    
        }else if(name==="phone"){
            return{
                loginId:preVal.loginId,
                password:preVal.password,
                email:preVal.email,
                phone:value
            }
    
        }
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