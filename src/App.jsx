import React from 'react'
import {Route,Switch} from 'react-router-dom'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Menu from './Menu'

const App = () => {

    const base=()=>{
        return <h1>This is base page</h1>
    }

    const ErrorPage=()=>{
        return <h1>This is  ErrorPage page</h1>
    }
    return (
        <div>
        <Menu></Menu>
            <Switch>
                <Route exact path="/" component={base}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/About" component={AboutUs}/>
                <Route  component={ErrorPage}/>
                
            </Switch>
        </div>
    )
}

//switch is used to see the first path which is encountered 

export default App
