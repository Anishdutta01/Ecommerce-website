const { name } = require("ejs");
const mongoose=require("mongoose");
const ownerSchema= mongoose.Schema({
    name:{
        type:String,
        minLength:3,
        trim:true
    },
    email:String,
    password:String,
    products:{
        type:Array,
        default:[]
    },
    picture:String,
    gstIn:String




});
module.exports=mongoose.model("owner",ownerSchema);