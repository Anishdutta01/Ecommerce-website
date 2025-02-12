const express=require("express");
const router=express.Router();
const ownermodel=require("../models/ownermodel");
const bcrypt =require("bcrypt");
const products=require("../models/productmodel");
router.post("/create",async(req,res)=>{
    
    
       let owner= await ownermodel.find();
       if(owner.length>0)
            return res.status(500).send("owner already exists");
       else{
        let{fullname,email,password}=req.body;
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt,async (err,hash)=>{
                let createdowner=await ownermodel.create({
                    fullname,
                    email,
                    password:hash
                });
                res.redirect("/admin");
            })
        })
        
       }
       
       

    
});
router.get("/create",(req,res)=>{
    res.render("createowner.ejs");
})
router.get("/admin",(req,res)=>{
    let success=req.flash("success");
    res.render("createProducts.ejs",{success});
})
router.get("/productview",async (req,res)=>{
    let products1=await products.find();
    res.render("productview.ejs",{products1});
})


module.exports=router;