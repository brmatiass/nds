import React, { Fragment } from 'react'
import Logout from '../Logout/Logout';
import { HeaderContainer, Logado, LogoSistema, Profile, Toogle, Username } from './Styles';

const Header = () => {
    return (
       <Fragment>       
           <HeaderContainer>
                 <LogoSistema></LogoSistema>  
                 <Toogle></Toogle>  
                 <Profile>
                     <Logado>Nome:</Logado>
                     <Username>Francisco Sérgio</Username>
                     <Logout/>
                 </Profile>
           </HeaderContainer>
       </Fragment> 
    )
}

export default Header;