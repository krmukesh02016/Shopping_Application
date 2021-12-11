import React ,{useState,useEffect} from 'react'
import Axios from 'axios'

import StripeContainer from './StripeContainer';
import PaymentForm from './PaymentForm';

function Usercart()
{
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var id = urlParams.get('id');

    const [pdata,setPdata] = useState([]);

    function getdata(){
		Axios.post('http://localhost:1000/usercartdata', {id:id}).then(function(succ){
            setPdata(succ.data);
		})
	}

    useEffect(() => {
		getdata()
	}, [])

    var token = localStorage.getItem('token');
    if(token == null)
    {
        window.location.href = '/login';
    }
    function userLogout()
    {
        localStorage.removeItem('token');
        window.location.href='/login';
        
    }
    const [showItem, setShowItem] = useState(false)
    return(
        <div>
            <h1>USER : {token}</h1>
            <div className="col-lg-12">
                <button  className="btn btn-danger"onClick={userLogout}>Logout</button>
            </div>
            <br /><br />
            <h1 style={{textAlign:'center',fontFamily:"inherit"}}>USER CART</h1>
            <br />
            <br />
            <div className="col-lg-6 col-lg-offset-3">
            <table class=" table table-striped">
                    <thead>
                        <td>PRODUCT NAME</td>
                        <td>BRAND</td>
                        <td>PRICE</td>
                        <td>DESCRIPTION</td>
                    </thead>
                    <tbody>
                        <tr>
                                <td>{pdata.Pname}</td>
                                <td>{pdata.brand}</td>
                                <td>{pdata.price}</td>
                                <td>{pdata.desc}</td>
                        </tr>
                    </tbody>
                </table>                        
                    
            
              <br/>
              <hr/>
           {showItem ? <StripeContainer/> : <> <h3> ₹ {pdata.price}</h3> <p></p>{pdata.desc}<p/>
           <button onClick={() => setShowItem(true)}>BUY Now</button></>}
           </div>
      </div>
        
        
    )
}
export default Usercart;