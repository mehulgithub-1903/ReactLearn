import React, {useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Card from './components/Card';
import Tooltip from '@material-ui/core/Tooltip';
const App = () => {


    const [num, setNum] = useState(0);

    const IncNum=()=>{
        if(num!=10){
            setNum(num+1)
        }
        else{
            alert("sorry value cannot be further increased")
        }
    }


    const DecNum=()=>{
        if(num!=0){
            setNum(num-1)
        }else{
            alert("sorry value cannot be further decreased")
        }
    }


    return (
        <div>
        <p>{num}</p>
        <Tooltip title="Add"> 
            <Button className="inc" onClick={IncNum}> <AddIcon/> </Button>
            </Tooltip>
            <Tooltip title="Delete"> 
            <Button className="dec" onClick={DecNum}> <RemoveIcon/></Button> 
            </Tooltip>  
                  
        <Card></Card>
        </div>

    )
}

export default App
