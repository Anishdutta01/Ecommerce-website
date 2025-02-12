const bcrypt=require("bcrypt");
const user=require("../models/usermodel");
const jwt =require("jsonwebtoken");
const cookieParser=require("cookie-parser");
const {generatetokens}=require("../utils/generatetokens");




module.exports.registerUser= async function (req,res){
    
    try{
        let {fullname,email,password}=req.body;
        let user1= await user.findOne({email:email});
        if(!user1){
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(password,salt,async (err,hash)=>{
                    if(err){
                        return res.send(err.message);
                    }
                    else{
                        let createduser=await user.create({
                            fullname,
                            email,
                            password:hash
                        });

                        /*let token=generatetokens(createduser);
                        res.cookie("token",token);*/
                        req.flash("good","User created successfully");
                        res.redirect("/");
                    }
                });
            });
        }
        else{
            return res.status(503).send("user already exists");
        }
   
    }
    catch(err){
        res.send(err.message);
    }

};
module.exports.loginUser= async function(req,res){
    try{
        let{email,password}=req.body;
        let user1= await user.findOne({email:email});
        if(user1){
            bcrypt.compare(password,user1.password,(err,result)=>{
                if(result===true){
                    let token=generatetokens(user1);
                    res.cookie("token",token);
                    res.redirect("/shop");
                }
                else{
                    req.flash("error","Wrong user details");
                    return res.redirect("/");
                }
            })
            
            
        }
        else{
            req.flash("error","Wrong user details")
            return res.redirect("/");
        }
        
    }
    catch{
        res.send(err.message);
    }
};
module.exports.logoutUser= function(req,res){
    res.cookie("token"," ");
    res.redirect("/");
}