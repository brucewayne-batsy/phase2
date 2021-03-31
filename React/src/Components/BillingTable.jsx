import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import {Row} from './Row'
import { black } from 'material-ui/styles/colors';
import {Save}from "@material-ui/icons"
import { white,red800 } from 'material-ui/styles/colors';


import{sending} from "./sending";


const useStyles = makeStyles({
    table: {
      minWidth: 500,
      
    },
    i:{
        color:red800,
        
    }
  
  
  });





class Apps extends React.Component{



constructor(){
super();
this.state={
    table:[],
    index:1,
    
}
}

//sty=useStyles;


addrow=(e)=>{
    if(e==this.state.index-1){
    this.setState(()=>({ table:[...this.state.table, <Row key={this.state.index}  SNO={this.state.index}  fun={this.addrow}> </Row>],index:this.state.index+1  }));
    }
}



 final=()=>{
 const value=    sending.final();

 // console.log(value );

fetch('http://localhost:4000/senddata', {
  method:'POST',
  body:JSON.stringify( value ),
  headers:{
    'Content-Type': 'application/json',
  }
}).then((s)=>(console.log(s))).catch((err)=>{console.log(err) })

}
classes=makeStyles({
  table: {
    minWidth: 500,
    
  },});
componentDidMount(){
    this.setState(()=>( {table:[...this.state.table, <Row key={this.state.index}  SNO={this.state.index}  fun={this.addrow}> </Row>], index:this.state.index+1 } ));

}
render(){

return(  


    < React.Fragment >
      <Table  className={this.classes.table}  aria-label="caption table"  >
        <caption align="left" >total price  </caption>
        <TableHead>
          <TableRow>
            <TableCell>S.NO</TableCell>
            <TableCell align="left">PRODUCTS</TableCell>
            <TableCell align="left">PRICE</TableCell>
            <TableCell align="left">QUANTITY</TableCell>
            <TableCell align="left">T.PRICE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        

               { 

                this.state.table.map((ele)=>{return(ele); })
               }


        </TableBody>
      </Table>
    <Button onClick={this.final} variant="contained"  > submit </Button>         
</React.Fragment>
 );


}

}
export default Apps;