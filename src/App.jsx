import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Note from './Note'

const App = () => {

 const [AllTask, setAllTask] = useState([])
const added=(note)=>{
  setAllTask((prev)=>{
    return [...prev,note]
  })
}

const del=(key)=>{
setAllTask((prev)=>{
  return prev.filter((e,index)=>{
    return key!==index
  })
})
}

  return (
    <div>
      <Header></Header>
      
      <CreateNote passNote={added}></CreateNote>
      {AllTask.map((e,index)=>{
        return( 
          <>
          <Note ind={index} deleteItem={del} title={e.title} content={e.content}/>
          </>
        )
      })}
      <Footer></Footer>
    </div>
  )
}

export default App
