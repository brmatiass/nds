import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import ListarAutor from "../pages/Autor/Listar";
import Dashboard from '../pages/Dashboard/Dashboard';


const AppRouter = () => {
    return (
       <Layout>
           <Switch>
               <Route path="/dashboard" exact component={Dashboard}/>
               <Route path="/autor/listar" component={ListarAutor}/>
           </Switch>
       </Layout>
    )
}

export default AppRouter
