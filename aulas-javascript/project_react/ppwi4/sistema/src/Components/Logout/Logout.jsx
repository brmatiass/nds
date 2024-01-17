import React from 'react'
import { UserLogout } from '../Header/Styles';
import { useHistory } from 'react-router-dom';
import { logout } from '../../Config/Token';

const Logout = () => {

    let history = useHistory();
    
    const onLogout=()=> {
        logout(); 
        history.push("/");
    }

    return (
        <UserLogout onClick={()=>onLogout()}>
            <i className="fa fa-sign-out fa-lg"></i>
        </UserLogout>
    )
}



export default Logout

