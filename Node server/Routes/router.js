const express=require('express');

const router=express.Router();
const db=require('../DataBase/database')

const datapost=router.post('/postdata'  ,(req,res,next)=>{

    const ne=req.body[0];
    console.log("ne:");
    console.log(ne);
    const dates=new date();

})



const data=router.get('/data',(req,res,next)=>{ 

    console.log(req.header);
    db.execute('SELECT * FROM product').then(
   ([k,u])=> res.status(200).json(k)).catch((err)=>{ console.log(err)});

})



module.exports=data;