import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';

const isLogged = () => {
    let logged = localStorage.getItem('logged');
    return logged;
}

const AppRouter = ({ component:Component, ...rest  }) => {
    return (
       <Layout>
         <Route {...rest}
          render = { props => isLogged() ?
                   ( <Component {...props}/> ) : 
                   ( <Redirect to={{pathname:"/"}}/> )} 
        />
       </Layout>
    )
}

export default AppRouter
