import React ,{useState}from 'react'


const UseStateObjects=()=>{

    const [initial,setInitial]=useState({
        name: 'Mehul',
        age:18,
        degree:'BTECH'
    })
    const changeVals=()=>{
        setInitial({...initial,age:28
        })
    }

    const List=()=>{
        return(
            <div>
            <h1> Name : {initial.name} Age: {initial.age} gender:{initial.degree} <button onClick={changeVals}>Click M</button> </h1>
            
        </div>    
        )
    }

    // just to change age in initial objects
    return(
        <>
        <List></List>
        <List></List>
        
        </>
    )
}

export default UseStateObjects