import React from 'react'

import * as List /*name, {surname,myName}*/ from './Dummy.jsx'

function App() {
    return(
    <>
    <p>
        { List.default} 
        { List.surname} 
        { List.myName()}
    </p>
    </>
    );


}

export default App;