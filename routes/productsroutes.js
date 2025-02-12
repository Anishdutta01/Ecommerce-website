const express=require("express");
const router=express.Router();
const upload=require("../config/multer-config");
const productmodel = require("../models/productmodel");
router.post("/create",upload.single("image"),async (req,res)=>{
    let{name,price,discount,bgcolor,panelcolor,textcolor}=req.body;
    try{
        let product=await productmodel.create({
            name,
            price,
            discount,
            bgcolor,
            panelcolor,
            textcolor,
            image:req.file.buffer
        })
        req.flash("success","product created successfully");
        res.redirect("/owner/admin");
    }
    catch(error){
        return res.send(error.message);
    }
});
module.exports=router;
