require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

//using middlewares provided by express 
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//importing files or classes or routes from your file or which we have created
const authRoutes = require("./routes/auth.js");


//db connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=> {
    console.log("DB CONNECTED");
}).catch(()=>{
    console.log("DATABASE NOT CONNECTED SOME ERROR");
})

//using middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//my routes
app.use("/api",authRoutes);

//port 
const port = process.env.PORT || 8000;

//starting a server 
app.listen(port,()=>{
    console.log(`app is running at ${port}`);
});