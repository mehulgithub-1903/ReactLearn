import React,{useState} from 'react'

const Contact = () => {




 const [cred, setCred] = useState({
     fullname:"",
     num:"",
     email:"",
     msg:""
 })

 const inputEvent=(event)=>{

    const {name,value}=event.target;

    setCred((pre)=>{
        return {
            ...pre,
             [name]:value,
        }
    })

 }

 const formSubmit=(event)=>{
        event.preventDefault();
        alert(` My name is:${cred.fullname}.
        My email is :${cred.email}.
         My Email Is :${cred.num} . 
         This is my msg :${cred.msg}`)
 }
    return (
        <>
            <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto ">
                            <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">FullName</label>
                                <input name="fullname" value={cred.fullname} onChange={inputEvent} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name"/>
                                </div>
                                    <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                <input name="num" value={cred.num} onChange={inputEvent} type="number" class="form-control" id="exampleFormControlInput1" placeholder=" Enter Your Mobile Number"/>
                                </div>
                                    <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input name="email" value={cred.email} onChange={inputEvent} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                                    
                                <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea name="msg" value={cred.msg} onChange={inputEvent} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-outline-danger" type="submit">Submit form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
