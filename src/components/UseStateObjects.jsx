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

    // just to change age in initial objects
    return(
        <div>
            <h1> Name : {initial.name} Age: {initial.age} gender:{initial.degree}</h1>
            <button onClick={changeVals}>Click M</button>
        </div>
    )
}

export default UseStateObjects