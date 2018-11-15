require("dotenv").config();
const express = require("express");
const {json} = require("body-parser");
const cors = require("cors");
const massive = require("massive"); 
const session = require('express-session');
const mainCtrl = require("./mainCtrl.js");


var app = express();

app.use(json());
app.use(cors());
app.use(session({ 
    secret:process.env.SESSION_SECRET,
    saveUninitialized:true,
    resave:false
}))


massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set("db",dbInstance)
}).catch(err=>console.log(err));

mainCtrl(app)

var port = 4000
app.listen(port,()=>{
    console.log("Listening on port: "+port);
})