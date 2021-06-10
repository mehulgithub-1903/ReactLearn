import React, { createContext } from 'react'
import ComA from './ComA'


const FirstName=createContext();
const LastName=createContext();

const App = () => {
  return (
    <div>
        <FirstName.Provider value={"Mehul"}>
        <LastName.Provider value={"Porwal"}>
        <ComA/>
        </LastName.Provider>
        </FirstName.Provider>
    </div>
  )
}

export default App
export {FirstName,LastName}