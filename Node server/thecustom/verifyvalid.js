const express=require("express");
const app=express()

const route=express.Router();



const check=route.use("/check",(req,res,next)=>{

    res.send(app._router)
})




// value="n"

// const ex=(li,exptime)=>{
//     let u;
//     // console.log()
//   setTimeout(()=>{
//     console.log( "answer is"+li)  
//     li="/" },7000);

//  if(li=="/"){
//      console.log("no use")
//    return  u=route.use(  '', (req,res,next)=>{ res.redirect("/")  });
//  }

//  u=route.use(li,(req,res,send)=>{    
//     res.send(li);
//     } );

//     module.exports =u;
// }
// ex("/",7000);



module.exports=check;