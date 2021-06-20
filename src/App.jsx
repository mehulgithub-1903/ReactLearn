import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import {Switch,Route,Redirect} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./index.css"
import Navbar from './Navbar'
import Footer from './Footer'
const Land=()=>{
    return(
        <h1>
            welcome to landing page
        </h1>
        
        )
}
const App = () => {
    
    return (
        <>
        <Navbar></Navbar>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path="/About" component={About}/>
            <Route exact path='/Contact' component={Contact}></Route>
            <Route exact path='/Service' component={Service}></Route>
            {/* <Route component={Land}></Route> */}
            <Redirect to="/" />
         </Switch>
        <Footer></Footer>             
        </>
    )
} 

export default App
