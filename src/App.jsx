import React ,{useState}  from 'react'
import './index.css'





const App =()=>{


  const [iv,setiv]=useState('mehulPorwal');
    const changeName = ()=>{

        (iv=='mehulPorwal')?setiv('Richa Porwal'):setiv('mehulPorwal')

    }
    
    return(
        <>
        <h1>{iv}</h1>
    
        <button   onClick={changeName}> Click Me</button>
        </>
    )
}

export default App; 