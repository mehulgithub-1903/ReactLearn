import React from 'react'
import { NavLink } from 'react-router-dom'
const Card = (props) => {
    return (
        <>
         
         <div className="col-md-4 col-10 mx-auto">

<div className="card" >
<img src={props.imgsrc} width="200px" height="220px" className="card-img-top" alt={"This is a image"}/>
<div className="card-body">
<h4 className="card-title font-weight-bold">{props.title}</h4>
<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<a href="https://web.whatsapp.com/" className="btn btn-success">Know More</a>
</div>
</div>
</div>
         
                                
                                
                                    
                                                          
        </>
    )
}

export default Card
