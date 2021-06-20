import React from 'react'
import Land from './Land'
import pic from  '../src/Images/pic5.jpg'
const About = () => {
    return (
        <>
        <Land 
        greet={"Welcome to About Page"} 
        imgsrc={pic} 
        buttonText={"Contact Us"}
        location={"/Contact"}
        />
        </>
    )
}

export default About


