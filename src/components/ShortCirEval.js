import React ,{useState}from 'react'

const ShortCirEval = () => {

    const [demo,setDemo]=useState('hllo')
    return (
        <div>
            <h1>{demo || "Mehul"}</h1>
            <h1>{demo && "Richa"}</h1>
            
        </div>
    )
}

export default ShortCirEval
