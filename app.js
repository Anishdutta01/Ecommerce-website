const cookieParser = require("cookie-parser");
const express=require("express");
const app=express();
const path=require("path");
const expressSession=require("express-session");
const flash=require("connect-flash");

const ownerroutes=require("./routes/ownerroutes");
const usersroutes=require("./routes/usersroutes");
const productsroutes=require("./routes/productsroutes");
const db=require("./config/mongoose-connection");
const index=require("./routes/index");
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser());
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.EXPRESS_SESSION_SECRET,
})
);
app.use(flash());
app.use("/owner",ownerroutes);
app.use("/users",usersroutes);
app.use("/products",productsroutes);
app.set("view engines","ejs");
app.use("/",index);
app.listen(3000);