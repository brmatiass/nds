
import React from "react";
import { Switch, Route } from 'react-router-dom';
import Login from "../pages/Login/Login";

const AppAuth = () => {
   return(
    <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/login" exact component={Login}/>
    </Switch>
   )
}


export default AppAuth;