import React from 'react';
import ReactDOM from 'react-dom';
// import "./index.css";
import Sdata from './Sdata'
import Card from './Cards';

const x={
    color: 'red',
    backgroundColor: 'green'
};

// function ncard(x){
//  return(
//     <Card 
//      imgsrc={x.imgsrc}
//      title={x.title}
//      sname={x.sname}
//      link={x.link}
//  />
//  )
// }

ReactDOM.render(<> 
<h1>
    List Of Top 5 Netflix Series
</h1>
{Sdata.map(x=>{
    return(
        <Card 
     imgsrc={x.imgsrc}
     title={x.title}
     sname={x.sname}
     link={x.link}
 />
    );
})}



</>,document.getElementById('root'));