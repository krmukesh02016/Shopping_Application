import React ,{useState,useEffect} from 'react'
import Axios from 'axios'

function Userdashboard()
{
    const [pdata,setPdata] = useState([]);
    function getdata(){
		Axios.get('http://localhost:1000/fetchdata').then(function(succ){
			setPdata(succ.data);
		})
	}
    useEffect(()=>
    {
        getdata()
    },[])
    
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
    function productcart(x)
    {
        window.location.href='usercart/?id='+x;
    }
    return(
        <div>
            <h1>USER : {token}</h1>
            <div className="col-lg-12">
                <button  className="btn btn-danger"onClick={userLogout}>Logout</button>
            </div>
            <br /><br />
            <h1 style={{textAlign:'center',fontFamily:'sans-serif'}}>PRODUCT CHART</h1>
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
                       { pdata.map((row)=>
                        (
                            <tr key={row._id}>
                                <td>{row.Pname}</td>
                                <td>{row.brand}</td>
                                <td>{row.price}</td>
                                <td>{row.desc}</td>
                                <td>
                                    <button onClick={()=>productcart(row._id)}className="btn btn-info"><span className="glyphicon glyphicon-shopping-cart "> Add To Cart</span></button>     
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}
export default Userdashboard;