
//the pattern is same like res.send only difference is this is json i.e KEY VALUE pair

exports.signup = (req,res) => {
    console.log("REQUEST BODY", req.body);
    res.json({
        message: "sign up works!"
    });
    
};

exports.signout = (req,res)=>{
    console.log("Request Received...",req.body);
    // res.json({
    //     message: "User sign out"
    // });
    res.send("User Sign out is working fine");
};


