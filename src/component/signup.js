import React , {useState} from 'react';
import Axios from 'axios'
import Navbar from './navbar';
function Signup()
{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [contact,setContact] = useState('');
    function userSignup()
    {
            Axios.post("http://localhost:1000/insertdataUser",
            {
                email:email,
                password:password,
                name:name,
                contact:contact
            }).then((succ)=>
            {
                if(succ.data === true)
                {
                    console.log("data inserted")
                    alert("Succesfully Sign-Up Now You Can Login")
                    window.location.href='/userdashboard';
                }
                else
                {
                    alert(succ.data)
                }
            })
    }
    return(
        <div>
            <Navbar />
            <h2 className="text-center"><b>REGISTER YOUR SELF</b></h2>
            <div className="col-lg-4 col-lg-offset-4">
                <br/>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Enter Your Name" onChange={(event)=>{setName(event.target.value)}}></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Enter Your email" onChange={(event)=>{setEmail(event.target.value)}}></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" placeholder="Enter Password" onChange={(event)=> {setPassword(event.target.value)}}></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Enter Your Contact" onChange={(event)=>{setContact(event.target.value)}}></input>
                </div>
                <div className="form-group">
                    <input className="form-control btn btn-info" type="button" value="SignUp" onClick={userSignup}></input>
                </div>
            </div>

        </div>
    )
}
export default Signup;