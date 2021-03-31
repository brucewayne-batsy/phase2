const jstoken=require("jsonwebtoken")
const bs=require("bcrypt");
const express =require('express');

const db=require("../DataBase/database")


const route=express.Router()


const signin=route.post( "/usersignin",( req,res,next)=>{
  const email=req.body.email;
if(!email){
  return res.send("screw u")
}
  db.execute("SELECT * From userdatas.userdata WHERE email=?",[email]).then((e)=>{
    e=e[0]
    if(e.length){    
      bs.compare(req.body.password,e[0].password).then((check)=> { 
        console.log(check)
      if(check){
      const token=jstoken.sign( {email:req.body.email } , "cristianokarthick", {expiresIn:"1h" }  )
      return res.json({token:token, email:e[0].email} )     }
        res.send(check)
       
  }).catch((e)=>console.log(e))
}  } )})

const signing=route.post("/signup",(req,res,next)=>{
 console.log("signing is called")
 
 
  // console.log(req.method);
 console.log(req.body)
   var {firstName,lastName,email,password} =req.body;
  
   bs.hash(password ,10).then((pass)=>{
     password=pass;console.log(password);console.log(pass)    
    }).catch((e)=>{console.log(e)}).then(()=>
   {
   db.execute("SELECT email FROM userdatas.userdata WHERE email=?",[email] ).then((e)=>{
       console.log(e)
       e=e[0]
       console.log(e);
       if(!e.length){


        console.log(password)
        db.execute("INSERT INTO userdatas.userdata (email,firstname,lastname,password) VALUES(?,?,?,?)",[email,firstName,lastName,password]).then((e)=>{return res.json({"success":true,"status":"Created Successfully","statuscode":1,e})}).catch((e)=>(console.log(e)))
       
      }
       
      if(e.length){
      
        res.status(201) .json({
          "status":"Alreasy Exist",
          "statuscode":0,
          "success":false
        })      }

    })})


})




module.exports=signing
module.exports=signin