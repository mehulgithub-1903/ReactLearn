import React from 'react'
import ReactDom from 'react-dom'
import "./index.css"

const name="Mehul Porwal"
const cd=new Date().toLocaleDateString();
const ct=new Date().toLocaleTimeString();
const img1="https://picsum.photos/300/250"
const img3="https://picsum.photos/250/250"
const img2="https://picsum.photos/350/250"


// how to add inline css text-transform should be textTransform

const heading ={
  color:'#fa9191',
  fontWeight:'bold',
  textTransform:'capatalize'
};

ReactDom.render(
  <>
  <h1 style={heading} >Hello guys this is {name}</h1>
  <p className="para">Current Date is={cd}</p>
  <p  className="para">Current Time is ={ct}</p>
  <div className="img_div">
  <img src= {img1} alt="random images"></img>
  <img src= {img2} alt="random images"></img>
  <img src= {img3} alt="random images"></img>
  </div>
  <a href="https://groww.in/stocks/jsw-steel-ltd">THis is the link</a>
  </>
  ,document.getElementById('root')
)