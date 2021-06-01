import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(<App/>,document.getElementById('root'));

const arr1=["mehul","porwal","hello"]

const arr2=["richa",...arr1]

console.log(arr1)
console.log(arr2)
