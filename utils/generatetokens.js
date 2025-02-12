const jwt=require("jsonwebtoken");
const generatetokens=(user)=>{
    
    return jwt.sign({email:user.email,id:user._id},process.env.JWT_KEY);
};



module.exports.generatetokens=generatetokens;