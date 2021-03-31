import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {  useState,useEffect } from 'react';

import TextField from '@material-ui/core/TextField';
import {sending} from "./sending";


//import useStateWithCallback from 'useStateW'


export const Row=(e)=>{

    console.log("key is:"+e.SNO);

    const se= sending;
    //console.log(e.f);
    let [product,changeproduct]=useState()
    let [price,changeprice]=useState(0 );
    let [quantity,changequantity]=useState(0);
    let [tprice,t_price]=useState(0)
    
        const temp=e.fun;
        //console.log(temp);

    const keyclick=(event)=>{if(event.charCode === 13)
    {
      temp(e.SNO);
       // console.log("clicked"); 
    }

   // console.log(event.charCode) ;

 }

 console.log(e.submit);
useEffect(()=>{ 

  se.add( e.SNO-1,{product:product, price:parseInt(price),quantity:parseInt(quantity),tprice:tprice,customerid:e.SNO, } )  
t_price(price*quantity)
})


 
    return(  <TableRow>
        <TableCell align="left"> {e.SNO} </TableCell>
        <TableCell align="left"> <TextField min="0" onChange={e=>(changeproduct(e.target.value))} /> </TableCell>
        <TableCell align="left"> <TextField type="number" InputProps={{ inputProps: { min: 0 } }} placeholder="Single piece price " onChange={ (e)=>{  changeprice(e.target.value);t_price(price*quantity);   } }  /> </TableCell>
        <TableCell align="left"> <TextField onKeyPress={ keyclick} InputProps={{inputProps:{min:0}}} type="number" placeholder="No.of pieces" min="1" onChange={(e)=>{  changequantity(e.target.value); t_price(price*quantity);   }} /> </TableCell>
        <TableCell align="left"> {tprice} </TableCell>
    </TableRow>)
}