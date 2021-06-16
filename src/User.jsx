import React from 'react'
import { useParams ,useLocation} from 'react-router-dom'
const User = () => {

    const {fname,lname}=useParams();
    const location=useLocation();
    return (
        <div>
            <h1> Welcome {fname} {lname}</h1>
            <p>The location is {location.pathname}</p>
            {location.pathname ==='/user/Mehul/Porwal'?
            (<button onClick={()=>console.log("Clicked")}> Click Me</button>
            ):null
            }
            </div>
    )
}

export default User
