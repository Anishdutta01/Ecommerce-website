const express= require("express");
const router=express.Router();
const {registerUser,loginUser,logoutUser}=require("../controllers/authcontroller");
const bcrypt=require("bcrypt");
const user=require("../models/usermodel");
const jwt =require("jsonwebtoken");
const cookieParser=require("cookie-parser");
const {generatetokens}=require("../utils/generatetokens");
const isLoggedIn = require("../middlewares/isLoggedIn");


router.get("/register",(req,res)=>{
    res.render("userRegistration.ejs");

}); 
        

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/logout",logoutUser);

    
module.exports=router;