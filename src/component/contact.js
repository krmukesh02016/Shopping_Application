import Navbar from './navbar';
function Contact(){
    return(
        <div>
            <Navbar />
           
            <div class="jumbotron jumbotron-sm">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-lg-12">
                        <h1 class="h1">Contact us <small>Feel free to contact us</small></h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="well well-sm">
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for = "name">Name:</label>
                                        <input id="name" type="text" class="form-control" placeholder="Your Name" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="Email">Email Id.:</label>
                                        <input id="Email" type="email" class="form-control" placeholder="Your Email" required />
                                    </div>
                                    <div class="form-group">
                                       <label for="telephone">Contact No.:</label>
                                       <input id="telephone" type="tel" class="form-control" placeholder="+9193343xxxxx" pattern="/^+91(7\d|8\d|9\d)\d{9}$/"
                                       required />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="name">Message</label>
                                        <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                                            placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <button type="submit" class="btn btn-primary pull-right" id="btnContactUs"> Send Message</button>
                                </div>
                            </div>    
                        </form>
                    </div>  
                </div>
                </div>    
                </div> 
                   
          
            
        
        </div>
        
    )
}
export default Contact;