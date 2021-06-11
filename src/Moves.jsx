import React from 'react'

const Moves = (props) => {

    const ind=props.poke
    return (
        <div>
        <ol>
            {props.data.map((e)=>{
                <li>{e.move.name}</li>  
                            })}
            </ol>
        </div>
    )
}

export default Moves
