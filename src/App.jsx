import React from 'react'


import {Add,Sub,Division,Multiply} from './Calculator.jsx'

function App() {
    return (
        <>
        <ul>
        <li>Sum is {Add(5,1)}</li>  
        <li>Substraction is {Sub(7,5)}</li>
       <li>Product is {Multiply(8,5)}</li>
       <li>Quotient is {Division(6,2)}</li>
       </ul>
        </>
    );
    
}


export default App;



