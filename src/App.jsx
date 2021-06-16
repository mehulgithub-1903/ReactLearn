import React from 'react'
import {Route,Switch} from 'react-router-dom'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Menu from './Menu'
import User from './User'
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
                <Route path="/contact" render={()=><Contact name="Mehul Porwal"/>}/>
                <Route path="/About" component={AboutUs}/>
                <Route path="/user/:fname/:lname" component={User}></Route>
                <Route  component={ErrorPage}/>
                
            </Switch>
        </div>
    )
}

//switch is used to see the first path which is encountered 
// we can use render instead of component as render calls the function only of it 
// it is updated but component always calls the function
export default App
