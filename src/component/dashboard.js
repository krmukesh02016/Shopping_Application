import React, { useState , useEffect} from 'react';
import Axios from 'axios'
function Dashboard()
{
    const [Pname,setPname] = useState('');
    const [brand, setBrand] = useState('');
    const [price,setPrice] = useState('');
    const [desc,setDesc] = useState('');
   
    var token = localStorage.getItem('token');
    if(token == null)
    {
        window.location.href = '/login';
    }
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
    function insertData()
    {
        Axios.post("http://localhost:1000/insertdata",
        {
            Pname:Pname,
            brand:brand,
            price:price,
            desc:desc,
        
        }).then((succ)=>
        {
            if(succ.data === true)
            {
                console.log("data inserted")
                getdata();
            }
            else
            {
                alert("Product allready in Bucket or  Something eroor in Input ")
            }
        })
    }
    function deletethis(x)
    {
        console.log("working")
        Axios.post("http://localhost:1000/deletedata",
        {
            id:x
        }).then((succ)=>
        {
            getdata();
        })
    }
    function userLogout()
    {
        localStorage.removeItem('token');
        window.location.href='/login';
        
    }
    return(
        <div>
            <h1>DASHBOARD</h1>
            <div className="col-lg-12">
                 {token}
                <button onClick={userLogout} className="btn btn-danger">Logout</button>
            </div>
            <br /><br />

            <div className="col-lg-3">
                <div className="form-group">
                    <input type="text" placeholder="Enter Product" className="form-control" onChange={(event)=>{setPname(event.target.value)}} ></input>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Enter Brand Name" className="form-control" onChange={(event)=>{setBrand(event.target.value)}} ></input>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Set Price" className="form-control" onChange={(event)=>{setPrice(event.target.value)}} ></input>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Enter Desc" className="form-control" onChange={(event)=>{setDesc(event.target.value)}}></input>
                </div>
                
                <div className="form-group">
                    <input type="submit" onClick={insertData} className="btn btn-success form-control" value="Add Product"></input>
                </div>
                </div>   
                <div className="col-lg-6 col-lg-offset-2">
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
                                    <button className="btn btn-danger" onClick={()=>deletethis(row._id)}><span className="glyphicon glyphicon-trash"></span></button>     
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Dashboard;