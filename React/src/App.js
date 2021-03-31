import React from "react";

// import BrowserRouter from "react-router-dom";

import {
  BrowserRouter ,Route,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";


// import {Route, Switch,Redirect} from "react-router";

//import {Route} from "react-router";
import Sign from "./Components/Signin"; 
import Signup from "./Components/signup";
import Topheader from "./Components/Topheader";
//import BillingTable from "./Components/table";

import {signincheck} from "./Components/signincheck";


class App extends React.Component{

  constructor(){
    super();
    this.state={
      signin:sessionStorage.getItem("token"),
    }
   
  }

    //this.setState(state => ({      isToggleOn: !state.isToggleOn    }));
check=()=>{   

  this.setState( {signin:sessionStorage.getItem("token") }  )

}



signout=()=>{
  window.sessionStorage.clear()
  this.setState( {signin:sessionStorage.getItem("token") }  )

}




render(){
  return(

    <div>
    
    <BrowserRouter>

    <Switch> 
<Route exact path="/user">
{(this.state.signin) ? <Topheader signout={this.signout} signin={this.state.signin} varification={this.state.username} signout={this.signout }  auth={this.state.username} ></Topheader> : <Redirect to="/"  /> }
</Route>
 <Route exact path="/signup"> <Signup></Signup>   </Route>
    
    <Route  path="/"      >
    {(!this.state.signin)?     <Sign check={this.check} />:<Redirect to="/user"  />
 } 
     </Route> 
   
    </Switch>
    </BrowserRouter>
   </div>

    );
}

}
export default App;