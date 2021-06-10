import React ,{useContext}from 'react'
import {FirstName,LastName} from './App.jsx'
const ComC = () => {

  const fname = useContext(FirstName)
  const lname = useContext(LastName)

    return (
        <div>
         <h1>My Name is {fname} {lname} </h1> 
        </div>
    )
}

export default ComC
