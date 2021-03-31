//import React from "react";



import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Dialogue from "./Dialogue"
// import Alert from '@material-ui/lab/Alert';

import {Redirect} from 'react-router'

// import { Alert } from '@material-ui/lab';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {


  const classes = useStyles();
 let [render,changerender]=useState({})

  let [detail ,changedetail ]=useState({firstName:'',lastName:'',email:'',password:'' })
  let [signupsuccess,changesignup]=useState({"statuscode":0});

  // console.log("the ")
   console.log("render is:"+render.statuscode)
  if(render.statuscode==1 || render.statuscode==0){
    // console.log
    if(render.statuscode==0)
    alert("The account "+ render.status+" please Signin or try other email" )

    changerender({});
    if(render.statuscode==1)
   { 
    alert("The account "+ render.status+" please Signin") 
    changesignup(render);
    changerender({});}
  }


  const signing=()=>{

  if(detail.email.length==0||detail.firstName.length==0||detail.lastName.length==0||detail.password.length==0)
return alert("All Field Required");
    console.log(detail);
    
    fetch(' http://localhost:4000/signup',{
      method:"POST",
      body:JSON.stringify(  detail ),
  headers:{
    'Content-Type': 'application/json',
  }
    } ).then((data)=>data.json())
    .then((data)=>{ changerender({ ...data});  console.log(render)}  )
    .catch((e)=>console.log(e))

  }


  return (
    (!window.sessionStorage.getItem("token"))?
    (!signupsuccess.statuscode)?
    <Container component="main" maxWidth="xs" color="primary" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form}    noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                fullWidth
                onChange={(e)=>changedetail({...detail,firstName:e.target.value}) }

                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={(e)=>changedetail({...detail,lastName:e.target.value}) }


                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                variant="outlined"
                required
                fullWidth
                onChange={(e)=>changedetail({...detail,email:e.target.value}) }
                
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              required
                variant="outlined"
                required
                fullWidth
                name="password"
                onChange={(e)=>changedetail({...detail,password:e.target.value}) }
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            onClick={signing}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/sign" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        
      </Box>
    </Container> : <Redirect to='/' />:<Redirect to='/user' />
  );
}