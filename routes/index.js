const express=require("express");
const router=express.Router();
const isloggedin=require("../middlewares/isLoggedIn");
const productmodel=require("../models/productmodel")
const user=require("../models/usermodel");
router.get("/",(req,res)=>{
    let good=req.flash("good");
    let err=req.flash("error");
    res.render("userRegistration.ejs",{err,good,loggedin:false});
})
router.get("/shop",isloggedin,async (req,res)=>{
    let success=req.flash("success");
    let users=await user.findOne({email:req.user.email});
    let products=await productmodel.find();
    res.render("shop.ejs",{products,success,users});
});
router.get("/Addtocart/:id",isloggedin,async (req,res)=>{
    let user3=await user.findOne({email:req.user.email});
    console.log(user3);
    
    user3.cart.push(req.params.id);
    
    await user3.save();
    
    req.flash("success","Added to cart");
    res.redirect("/shop");
});
router.get("/cart",isloggedin,async (req,res)=>{
    let user1=await user.findOne({email:req.user.email}).populate("cart");
    console.log(user1);
    let success= req.flash("success");
    res.render("cart.ejs",{user1 ,success});
});
router.get("/localhost/3000/shop/:num",isloggedin,async (req,res)=>{
    
    let products=await productmodel.find();
    let nums=req.params.num;
    if(nums==0){
        products=await productmodel.find().sort({price:1});
        res.render("shop2.ejs",{nums,products});
    }

    else{
        res.render("shop2.ejs",{nums,products});
    }
    
    
    
});
router.get("/review/:id",isloggedin,async (req,res)=>{
    let product=await productmodel.findOne({_id:req.params.id});
    res.render("review.ejs",{product});
})
router.post("/review/:id",isloggedin,async (req,res)=>{
    let product=await productmodel.findOne({_id:req.params.id});
    let users=await user.findOne({email:req.user.email});
    var obj={};
    obj[users.fullname]=req.body.review;
    product.reviews.push(obj);
    await product.save();
    req.flash("success","review added successfully");
    res.redirect("/cart");
})

module.exports=router;