import React from 'react'
import "./index.css"
let time=""
const cssStyle ={
    color: "red"
}
 let ct=new Date();
ct=ct.getHours();
if(ct>=1 && ct<=12){
  time="Good Morningggg"
}
else if(ct>12 && ct<=19){
  time="GoodAfternoon"
  cssStyle.color="orange"
}
else{
  time="Good Night"
  cssStyle.color="red"
}
function Greeting(){

    return(<div>
        <h1>Hello Sir,<span style={cssStyle}>{time}</span></h1>
        </div>);
}

export default Greeting;