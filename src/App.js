import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route , BrowserRouter as Router} from 'react-router-dom';
import Home from "./component/home";
import Login from './component/login';
import Dashboard from './component/dashboard'
import Signup from "./component/signup"
import Userdashboard from './component/userdashboard'
import Usercart from './component/usercart'; 
import Alogin from './component/alogin'; 
import Contact from './component/contact';
import StripeContainer from './component/StripeContainer';
import PaymentForm from './component/PaymentForm';


 
function App() {
  
    return (
      <div>
        
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/alogin" component={Alogin} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/userdashboard" component={Userdashboard} />
          <Route path="/usercart" component={Usercart} />  
          <Route path="/contact" component={Contact} />  
          <Route path="/StripeContainer" component={StripeContainer}/>
          <Route path="/PaymentForm" component={PaymentForm}/>

        </Router>
        </div>
    );
  }
export default App;