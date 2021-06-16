import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {

    const {fname,lname}=useParams();

    return (
        <div>
            <h1> Welcome {fname} {lname}</h1>
        </div>
    )
}

export default User
