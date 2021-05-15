
import React ,{useState}from 'react'

const RulesHook =()=>{

    const [myName,setMyName]=useState('Mehul Porwal');

    

    return (
        <div>
            <h1>
                {myName}
            </h1>
        </div>
    );

}

export default RulesHook;