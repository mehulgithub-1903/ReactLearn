import React from 'react';

import Sdata from './Sdata'
import Card from './Cards';



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
const App=()=>{
    return(<>
<h1>
    List Of Top 5 Netflix Series
</h1>
{Sdata.map(x=>{
    return(
        <Card 
        key={x.id}
     imgsrc={x.imgsrc}
     title={x.title}
     sname={x.sname}
     link={x.link}
 />
    );
})}
    </>)
}




export default App