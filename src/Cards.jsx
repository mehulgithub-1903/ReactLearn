import React from 'react'
import Images from './Images'
import "./index.css"
import Heading from './Heading'
function Card(props){
    return(
        <> 
        <div className="cards">
            <div className="card">
               <Images imgsrc={props.imgsrc} alt={props.title}/>
                 <div className="card_info">
                    <span className="card_category"> {props.title}</span>
                    <Heading Myname={props.sname}/>
                    <a href={props.link} target="_blank">
                    <button>Watch Now</button>
                    </a>
                 </div>   
                
            </div>
        
        </div>
        </>
    );
}

export default Card