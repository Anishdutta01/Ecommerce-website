const mongoose=require("mongoose");
const product=require("../models/productmodel")
const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        
        trim:true
    },
    email:String,
    password:String,
    orders:{
        type:Array,
        default:[]
    },
    address:String,
    contact:Number,
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    }
        
    ]
        
    
    
       
    
})
module.exports=mongoose.model("user",userSchema);