import React, { Fragment, useEffect, useState } from 'react'
import Logout from '../Logout/Logout';
import { HeaderContainer, Logado, LogoSistema, Profile, Toogle, Username } from './Styles';
import { getUsername } from '../../Config/Token';

const Header = ({changeStateMenu}) => {
    
    const [userName, setUserName] = useState("");
    const [showMenu, setShowMenu] = useState(false);


    const showSideBar = () => {
        
        setShowMenu(!showMenu)
        changeStateMenu(showMenu)
    }

    const getUsuario=()=>{
        setUserName(getUsername());
    }

    useEffect(()=>{
      getUsuario()
    },[userName]);

    return (
       <Fragment>       
           <HeaderContainer sidebar={showMenu}>
                 <LogoSistema></LogoSistema>  
                 <Toogle onClick={()=>showSideBar()} /> 
                 <Profile>
                     <Logado>Nome:</Logado>
                     <Username>{ userName }</Username>
                     <Logout/>
                 </Profile>
           </HeaderContainer>
       </Fragment> 
    )
}

export default Header;