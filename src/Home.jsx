import React from 'react'
import Land from './Land'
import pic from  '../src/Images/pic.jpg'
const Home = () => {
    return (
        <>
        <Land 
        greet={"Groww your business with"} 
        imgsrc={pic} 
        buttonText={"Get Started"}
        location={"/Service"}
        />
        
        </>
    )
}

export default Home

