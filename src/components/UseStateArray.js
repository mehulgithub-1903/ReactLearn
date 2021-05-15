import React ,{useState}from 'react'

const UseStateArray =()=>{


    const myBioData = [
        {
            id:0, myName:"vinod", age:26
        }, {
            id:1, myName:"thapa", age:27
        }, {
            id:2, myName:"technical", age:27
        } ,{
            id:3, myName:"Mehul", age:21
        }
    ]
    // const myNewBioData = [
    //     {
    //         id:0, myName:"Mehul", age:26
    //     }, {
    //         id:1, myName:"thapa", age:27
    //     }, {
    //         id:2, myName:"technical", age:27
    //     } ,{
    //         id:3, myName:"Porwal", age:21
    //     }
    // ]

    // const myArr =myBioData
    const [myArr,setmyArr]=useState(myBioData);
    const clearArray=(id)=>{
        
        const newArr=myArr.filter((e) => {
            return e.id !== id
        })

            setmyArr(newArr);
    }
    
   

    return(
        <>
        {myArr.map((e)=>{
            return(
                <h1 className="hstyle" key={e.id}>My name is : {e.myName} and my age is {e.age }  <button onClick={() => clearArray(e.id)}>Click Here</button> </h1>
            
            )
        })} 

       
    </>
    )
}
    
export default UseStateArray