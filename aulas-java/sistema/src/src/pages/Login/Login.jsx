
import React, { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { LoginContent } from "../../Components/Login/styled";
import { setUsuario } from "../../Config/Token";
import { loginSistema } from "../../Service/LoginService";
import { INIT_LOGIN } from "./LoginSystem";
    
const Login = () => {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ user, setUser ] = useState(INIT_LOGIN);
    
    let history = useHistory();

    async function onLogin( e, email, password ) {
        e.preventDefault();
        user.email = email;
        user.password = password;
        const data = await loginSistema(user);
        if ( data.status >= 404 ){
            /*console.log(data.data.userMessage);
            console.log(data.data.title);*/
            console.log(data)

        } else {
           setUsuario(data);
           history.push('/dashboard');
           console.log(data)
        }
    } 

    return (
        <Fragment>
            <LoginContent>
               <section className="material-half-bg">
                   <div className="cover"></div>
               </section>
               <section className="login-content">
                    <div className="logo">
                        <h1>Sistema</h1>
                    </div>    
                    <div className="login-box">
                        <form className="login-form" onSubmit={ (e) => onLogin( e, email, password )  }>
                                <h3 className="login-head">
                                    Acessar o Sistema
                                </h3>
                                <div className="form-group btn-margin">
                                    <label htmlfor="email" className="control-label">E-mail:</label>
                                    <input className="form-control"
                                           type="text"
                                           id="email"
                                           name="email"
                                           onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                                <div className="form-group btn-margin">
                                    <label htmlfor="password" className="control-label">Senha:</label>
                                    <input className="form-control"
                                           type="password"
                                           id="password"
                                           name="password"
                                           onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                                <div className="form-group btn-container btn-margin">
                                    <button type="submit" className="btn btn-primary btn-block" >Acessar</button>
                                </div>
                         </form>
                    </div>
               </section>
            </LoginContent>  
        </Fragment>
    )

}

export default Login;