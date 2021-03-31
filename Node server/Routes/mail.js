const express=require("express");
const jwt=require("jsonwebtoken");

const token=jwt.sign({ "status":"checking" }, "sendingmailprivatekey",{expiresIn:"1m"});



const route=express.Router();

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'cristianokarthick007@gmail.com',
    pass: '8838865681'
  }
});

// var mailOptions = {
//   from: 'cristianokarthick007@gmail.com',
//   to: 'cristianokarthick98@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text:"ok"
// };


const  email=route.use("/email",(req,res,next)=>{     
    ul=`http://localhost:4000/` 
transporter.sendMail(    {   
     from: 'cristianokarthick007@gmail.com',
    to: 'cristianokarthick98@gmail.com',
    subject: 'Sending Email using Node.js',
    html:`confirmation link <br>  <a href="${ul}" > click </a>` ,  
} ).then((e)=>res.send(e));


                                })


module.exports=email;                                   