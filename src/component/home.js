import Navbar from './navbar';
function Home(){
    return(
        <div>
            <Navbar />
            <h1 className="text-center"><strong>Welcome To Ekart</strong></h1>
            <hr/>
            <br />
          <div className="text-center">
            <h2>OUR SERVICES</h2>
            <p className="active"> Fashion</p>
            <p>Mobile</p>
            <p>Electronics</p>
            <p>Beauty</p>
            <p>Appliances</p>            
            </div>
            
        
        </div>
        
    )
}
export default Home;