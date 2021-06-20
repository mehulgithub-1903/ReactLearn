import React from 'react'

import { NavLink } from 'react-router-dom'

const Land = (props) => {
    return (
        <>
       <section id="header" className="d-flex align-items-center">
           <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto my-2">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1> {props.greet} <strong className="brand-name">Mehul Porwal</strong></h1>
                            <h2 className="my-3">
                                We are a team of developers
                            </h2>
                            <div className="mt-3">
                                <NavLink to={props.location} className="btn-get-started"> {props.buttonText}</NavLink>
                            </div>
                            
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} width="700px" height="500px" alt="home_img)" className="img-fluid animated" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}



export default Land
