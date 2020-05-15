const express = require("express");

const app = express();

const port = 3000;
app.get("/home", (req,res) => {
    return  res.send("Welcome to Home");
});


app.get("/login",(req,res)=> res.send("Logged In Successfully..."));
app.get("/logout",(req,res)=> res.send("Logged Out Successfully..."));
app.get("/aboutus",(req,res)=> res.send("About s Session..."));


//we are doing the same thing but just making a variable instead or call back function as above

const admin = (req,res)=>{
    return  res.send("This is Admin Panel");
};

const isAdmin = (req,res,next) => {
    console.log("ADMIN IS RUNNING");
    next();
}

const isLoggedIn = (req,res,next) => {
    console.log("Yes Logged In");
    next();
}

app.get('/admin', isLoggedIn ,isAdmin, admin);

//end here 



app.listen(port, () =>console.log("Got the request...."));