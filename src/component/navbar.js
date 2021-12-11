import React from 'react';
import { Link } from 'react-router-dom';
function Navbar()
{
    return(

        <nav className="navbar navbar">
        <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
           <a class="navbar-brand js-scroll" href="/"><strong>Ekart</strong></a>
           </div>
            <ul className="navbar-nav nav ">
                <li className="active"><Link to ="/">HOME</Link></li>            
                <li><Link to= "/alogin" >ADMIN</Link></li>
                <li><Link to= "/contact" >Contact-Us</Link></li>
            </ul>
            <ul className=" nav navbar-nav navbar-right">
                
                <li><Link to= "/login" >LOGIN</Link></li>
                <li><Link to= "/signup" >SIGNUP</Link></li>
            </ul>
            </nav>
        </div>
    </nav>
               
)
}
export default Navbar;