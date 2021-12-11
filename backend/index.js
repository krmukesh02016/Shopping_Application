const express = require("express")
const app = express();
const bodyParser=require("body-parser");
const mongo = require("mongodb");
const methodOverride = require("method-override");
const MongoClient=require("mongodb").MongoClient;
const cors =  require("cors")

require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)

const cs = "mongodb+srv://mukesh:mynewpassword@cluster0.rdnyr.mongodb.net/cart?retryWrites=true&w=majority";
//const client = new MongoClient(cs);
var product;
var User_Reg;
MongoClient.connect(cs,{useUnifiedTopology:true}).then(client=>
    {
        console.log("connected to database");
        const db=client.db("cart")
        product=db.collection("register")
        User_Reg=db.collection("register2")
    })
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride("_method"));
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())


app.get('/fetchdata',(req,res)=>
{
    product.find().toArray().then(
        function(succ)
        {
            res.send(succ);
        }
    )
})
app.post("/insertdataUser",(req,res)=>
{
    User_Reg.findOne({email:req.body.email}).then(function(succ){
        if(!(succ === undefined))
        {
            res.send("Email is allready taken")
        }
        else
        {
            User_Reg.insertOne(
                {
                    email:req.body.email,
                    password:req.body.password,
                    contact:parseInt(req.body.contact),
                    name:req.body.name
                }
            ).then((succ)=>
            {
                res.send("true");
            }).catch((err)=>
            {
                res.send("error")
            })
        }
    })
 
})

app.post("/insertdata",(req,res)=>
{   
    product.findOne({Pname:req.body.Pname}).then(function(succ){
        if(!(succ === undefined))
        {
            res.send("Product is allready in cart");
        }
        else
        {
            product.insertOne(
                {
                    Pname:req.body.Pname,
                    brand:req.body.brand,
                    price:parseInt(req.body.price),
                    desc:req.body.desc
                }
            ).then((succ)=>
            {
                res.send("true");
            }).catch((err)=>
            {
                res.send("error")
            })
        }
    })
    
})
app.post("/userlogin",(req,res)=>
{  
     User_Reg.findOne({
        email:req.body.email
    }).then((succ)=>
    {   
        if(succ === undefined)
        {
            res.send("false")
        }
        else
        {
            if(succ.password===req.body.password)
            {
                res.send(succ)
            }
            else
            {   
                res.send("false");
            }
        }
    })
})
app.post("/deletedata",(req,res)=>
{
    var idd= new mongo.ObjectId(req.body.id)
    product.deleteOne(
        {
            _id:idd
        }
    ).then((succ)=>
    {
        res.send('true')
    }).catch((err)=>
    {
        res.send('false')
    })
})
app.post("/usercartdata",(req,res)=>
{
    var idd= new mongo.ObjectId(req.body.id)
    product.findOne(
        {
            _id:idd
        }
    ).then((succ)=>
    {
        res.send(succ)
    }).catch((err)=>
    {
        res.send('false')
    })
})

//pyament method

app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "₹",
			description: "Ekart company",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.listen(process.env.PORT || 1000,()=>
{
    console.log("server started Running at 1000");
})

