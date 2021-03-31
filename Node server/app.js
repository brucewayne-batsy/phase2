const express=require('express');
const bodyparser=require('body-parser');

const signing=require('./Routes/Signing')
const router=require('./Routes/router');
const db=require('./DataBase/database');
// const check=require("./thecustom/verifyvalid");
const email=require("./Routes/mail");


const app=express();

app.use(bodyparser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','POST','GET');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
})

app.use(email);


app.use('/getall',(req,res,next)=>{
    db.execute("SELECT * FROM userdata").then(
        (e)=>{
            res.json(e[0])
        }

    )

} )


// app.use("/new",(req,res,next)=>{ res.send("<form action=/ )  })
app.use(signing);
// app.use(check);



app.post('/senddata',(req,res,next)=>{
    // console.log(req.method);
    // const temp=[...req.body]
    // console.log(temp);

    

    const dates=new Date();


     temp.map((e)=>{
     const {product,price,quantity,tprice}=e;

     if(e.price==0||e.quantity==0||e.tprice==0  )   {
         return( res.status(201).send("success"));
     }
     db.execute('INSERT INTO product (product,price,quantity,tprice,date,time) VALUES(?,?,?,?,?,?)', [e.product,e.price,e.quantity,e.tprice,dates,7]) 

     },()=>{return res.status(201).json({"karthick":"ok"})} ) 

   });












app.use( '/feed', router);

app.use("/check",(req,res,next)=>{

    // res.send(app._router)
    console.log(app._router);
})


app.use("/ch",(req,res,next)=>{ db.execute("select * from userdatas.userdata  ").then((e)=>{res.send(e[0])}) })

app.get('/',(req,res,next)=>{

  var name="cristianoRonaldo";
//   db.execute("show databases" ).then((e)=>{
//    for (i  in e[0]){
//        if(e[0][i].Database === name){
//            console.log("finded"+ e[0][i])
//            return console.log( e[0][i])
//        }
//    }

   db.execute("CREATE DATABASE "+name).then( (e)=>{console.log(e) ;res.send(e) }).catch((e)=>
   { 
       if(e.code=="ER_DB_CREATE_EXISTS")
        return res.send("already exist")

    //    db.execute("CREATE DATABASE "+name).then((e)=>{console.log(e); res.send(e)   } )

    })
    
    

console.log("fk"+req.body);
//  res.send("home")
})


app.listen( process.env.port||4000,()=>{    db.execute("CREATE DATABASE userdetail").then( (e)=>{console.log("CREATED USERDETAIL");  console.log("called") }).catch((e)=>{ console.log("ALREADY USER DERTAIL") })});