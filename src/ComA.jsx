import React,{useState,useEffect} from 'react'
import axios from 'axios'


const ComA = () => {

    const [num, setNum] = useState("No ")

    const [name, setName] = useState()

    const [moves, setMoves] = useState();
    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            setName(res.data.name)
        setMoves(res.data.moves.length)
        }

        getData();

        
    })
    return (
        <div>
        <h1>You choose <span style={{color:"red"}}>{name}</span> with <span style={{color:"red"}}>{moves.length}</span> moves</h1>
          <select value={num} onChange={(event)=>{
              setNum(event.target.value)
          }}>
              <option value="1">1</option>
              <option value="25">25</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="6">6</option>
          </select>
         
        </div>
    )
}

export default ComA
