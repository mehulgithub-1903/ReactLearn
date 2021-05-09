import React from 'react';

// import Sdata from './Sdata'
// import Card from './Cards';
import Netflix from './Netflix'
import Amazon from './Amazon'


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

const fav="amazon"

// const Favs=()=>{


//     return fav=="netflix"?<Netflix/>:<Amazon/>
//     // if(fav=="netflix"){
//     //     return(
//     //       <Netflix/>
//     //     )
//     // }else if(fav=="amazon"){
//     //     return(
//     //        <Amazon/>
//     //     )  
//     // }
// }

const App=()=>{
    return(<>
<h1>
    List Of Top 5 Netflix Series
</h1>
{fav=="netfix"?<Netflix/>:<Amazon/>}
{/* <Favs></Favs> */}
{/* {Sdata.map(x=>{
    return(
        <Card 
        key={x.id}
     imgsrc={x.imgsrc}
     title={x.title}
     sname={x.sname}
     link={x.link}
 />
    );
})} */}
    </>)
}




export default App