import React , {useState} from 'react';
import Navbar from './navbar';
import Axios from 'axios'
function Login()
{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    function userLogin()
    {   
        Axios.post("http://localhost:1000/userlogin",
        {
            email:email,
            password:password
        }).then((succ)=>
        {   console.log(succ.data)
            if(succ.data === false)
            {
                alert('sorry please check your email or password')
            }
            else
            {
                    localStorage.setItem('token',email);
                    window.location.href="/userdashboard";
                }
            
        })
        
    }
    return(
        <div>
            <Navbar />
            <h2 className="text-center">USER LOGIN</h2>
            <div className="col-lg-4 col-lg-offset-4">
                <br />
    
                    <div className="form-group">
                        <input className="form-control" required type="text" placeholder="Enter Your Email" onChange={(event)=>{setEmail(event.target.value)}}></input>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" placeholder="Enter Password" onChange={(event)=> {setPassword(event.target.value)}}></input>
                    </div>
                    <div className="form-group">
                        <input className="form-control btn btn-info" type="button" value="login" onClick={userLogin}></input>
                    </div>
               
            </div>

        </div>
    )
}
export default Login;