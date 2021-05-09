import React from 'react'
import './index.css'

import Slot from './SlotMachine'
import {win} from './SlotMachine'

const Congo=()=>{
    if(win>=2){
        return (<>
            <h1> SLot Jackpot</h1>
        </>)
    }
    else{
        return (<>
            <h1> SLot Jackpot Lose</h1>
        </>)
    }
}

const App=()=>{ 
    return(<> 
    <div className="Slot_M">
    <h2 className="head_Style"> 🌎 Welcome to Slot Machnine 🌎  </h2>
        <Slot x='🙂' y='🙂' z='🙂'/>
        <Slot x='🎼' y='🎼' z='🎼' />
        <Slot  x='🏊' y='🏊' z='🙂'/>
        <Congo/>
    </div>
    </>)
}


export default App;
