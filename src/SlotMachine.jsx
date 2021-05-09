import React from 'react'
import Win from './SlotWin'
import Lose from './Lose'
import './index.css'

let win=0;


const Slot=(props)=>{
    

    if((props.x==props.y) && (props.y==props.z)){
        win++;
        return(
            <>
            <Win x={props.x} y={props.y} z={props.z} />
            
            </>
            );
    }else{
        return(
            <>
            <Lose x={props.x} y={props.y} z={props.z} />

            </>
        )
    }
    
}

export default Slot;

export {win};