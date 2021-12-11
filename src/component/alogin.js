import React , {useState} from 'react';
import Navbar from './navbar';

function Login()
{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    
      function AdminLogin()
    {
        if(email === "admin@gmail.com" && password === "12345")
        {   
            localStorage.setItem('token',email);
            window.location.href='/dashboard';
        }
        else
        {
            alert("enter right email or password")
        }
    }
    return(
        <div>
           
            <Navbar />
            <h2 className="text-center">ADMIN LOGIN</h2>
            <div className="col-lg-4 col-lg-offset-4">
                <br />
                
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Enter Your Email" onChange={(event)=>{setEmail(event.target.value)}}></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" placeholder="Enter Password" onChange={(event)=> {setPassword(event.target.value)}}></input>
                </div>
                <div className="form-group">
                    <input className="form-control btn btn-info" type="button" value="login" onClick={AdminLogin}></input>
                </div>
            </div>

        </div>
    )
}
export default Login;