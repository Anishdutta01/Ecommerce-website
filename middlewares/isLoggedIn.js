const jwt =require("jsonwebtoken");
const user2=require("../models/usermodel");
module.exports=async function (req,res,next) {
    if(req.cookies===undefined){
        req.flash("error","You need to login first");
        return res.redirect("/");
    }
    else{
        try{
        
            let decoded =jwt.verify(req.cookies.token,process.env.JWT_KEY);
            let user= await user2.findOne({email:decoded.email}).select("-password");
            req.user=user;
            next();
        

        }
        catch(err){
            req.flash("error","something went wrong");
            res.redirect("/");
        }
    }
};