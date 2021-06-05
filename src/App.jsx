import React, {useState} from 'react'
import 'react-clock/dist/Clock.css';    
import MyApp from './components/Clock'
import Countdown from 'react-countdown';
const App = () => {

    return (
        <div>
        <Countdown date={Date.now() + 100000} />
        </div>

    )
}

export default App
