// import React, { useState,useEffect, Fragment } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import { Button } from '@material-ui/core';
// import {Row} from './Row'
// import { black } from 'material-ui/styles/colors';
// import {Save}from "@material-ui/icons"
// import { white } from 'material-ui/styles/colors';

// import{sending} from "./sending";


// const useStyles = makeStyles({
//   table: {
//     minWidth: 500,
    
//   },
//   i:{
//       color:white,
      
//   }


// });

// // function createData(name, calories, fat, carbs, protein) {
// //   return { name, calories, fat, carbs, protein };
// // }

// // const rows = [
// //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Eclair', 262, 16.0, 24, 6.0),
// // ];

// /*
 
//   {rows.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))} 
//  */





// //class Table extends React.Component{

// export default function Tables() {
//     //const ro=<Row/>;
//     let [index,setindex]=useState(1) ;

//     const F=function F(){
//       // console.log("f called"+index);
//       // newrow([...arr,<Row key={index} fun={F}  SNO={index}/>]);
//       //  //arr.push(<Row key={index} fun={F}  SNO={index}/>);
//       //  setindex(index+1);
//       // console.log(incre);
//       //   incre(inc+1);
//       setindex(index+1);
//       newrow([...arr,<Row key={index} SNO={index} fun={F} ></Row> ]);
//       console.log(index,arr);
  
  
//        }



    
//   const classes = useStyles();
//  const [arr,newrow ]=useState([<Row key={index-1} SNO={index} fun={F} />]);
//  var [inc,incre]=useState(2);
//  //console.log("fuck"+index);

// // var F= ()=>{
// //     // console.log("f called"+index);
// //     // newrow([...arr,<Row key={index} fun={F}  SNO={index}/>]);
// //     //  //arr.push(<Row key={index} fun={F}  SNO={index}/>);
// //     //  setindex(index+1);
// //     // console.log(incre);
// //     //   incre(inc+1);
// //   newrow([...arr,<Row key={Index} SNO={index}  ></Row> ])


// //      }

// const row=<Row key={index-1} fun={F }  SNO={index}/>;



//    const value=    sending.final();

// const final=()=>{

//  // console.log(value );

// fetch('http://localhost:4000/senddata', {
//   method:'POST',
//   body:JSON.stringify( value ),
//   headers:{
//     'Content-Type': 'application/json',
//   }
// }).then((s)=>(console.log(s))).catch((err)=>{console.log(err) })

// }

    
// // useEffect( ()=>{
// // //  useState(()=>{     
// //   console.log( "outer :"+arr.length);


// // // if(arr.length!=0){

// //   console.log(inc);
// //   console.log("array length is:"+arr.length);
// //   console.log(arr);
// //   let temp;

// //   if(inc>arr.length ){
// //    var k=inc-arr.length;
// //    while(k){
// //      console.log(k );

// //      //newrow([...arr+ <Row key={index-1} fun={F }  SNO={index-1}/>] );
// //       temp=[...arr];
// //       console.log(temp);
// //       newrow([arr]);
// //      k--;
// //      console.log(k);
// //    } } 
// // //if(arr.length==0){ newrow([...arr+ <Row key={index-1} fun={F }  SNO={index-1}/>\] );}





  





  
  
// // //   console.log("f"+index)
// // //   if(index-1===1){
// // //  return arr.push( <Row key={index-1} fun={F }  SNO={index-1}/>); }
// // // //arr.push( <Row key={index-1} fun={F }  SNO={index-1}/>);
// // // console.log( arr);
// // // });
// // });




//   return (<Fragment>
//       <Table className={classes.table} aria-label="caption table">
//         <caption align="left" >total price  </caption>
//         <TableHead>
//           <TableRow>
//             <TableCell>S.NO</TableCell>
//             <TableCell align="left">PRODUCTS</TableCell>
//             <TableCell align="left">PRICE</TableCell>
//             <TableCell align="left">QUANTITY</TableCell>
//             <TableCell align="left">T.PRICE</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
        

//                { 

//                 arr.map((ele)=>{return(ele); })
//                }


//         </TableBody>
//       </Table>
      
//          <Button  variant="contained" color="secondary"   endIcon={<Save className={classes.i}  ></Save>}   onClick={()=>{newrow( [ ...arr, <Row key={index} fun={F }   SNO={index}/>]   ); setindex(index+1);} }  >  click me</Button>
//          <Button onClick={final}> test </Button>
// </Fragment>
//   );
// }
