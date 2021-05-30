import React,{useState} from 'react'
import "./index.css"
const App = () => { 

    // const color="yellow"

    const [bg, setbg] = useState("yellow");
    const [text, settext] = useState("Hello");
    const Uc=()=>{
        setbg("green")
    }
    const Ut=()=>{
        settext("Hey 😄")
        setbg("Grey")
    }
    const Rt=()=>{
        settext("Hello")
        setbg("yellow")
    }
    return (
        <div>
            <button  onMouseOver={()=>Ut()} onMouseOut={()=>Rt()}   onClick={()=>Uc()}  style={{backgroundColor :bg}}>{text}</button>
        </div>
    )
}

export default App
