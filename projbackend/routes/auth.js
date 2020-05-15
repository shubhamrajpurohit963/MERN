var express = require('express')
var router = express.Router()


//import auth file from controller
var {signout,signup} = require("../controllers/auth.js");
 

router.post("/signup",signup);
router.get("/signout", signout);

module.exports = router;