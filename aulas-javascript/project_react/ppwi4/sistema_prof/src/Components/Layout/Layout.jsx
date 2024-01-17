import React, { Fragment } from 'react';
import Content from '../Content/Content';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';


const Layout  = ({ children }) => {
    return (
      <Fragment>
        <header>
          <Header/>
        </header> 
        <aside>
           <SideBar/> 
        </aside> 
        <main>
            <Content>
               { children }
            </Content>
        </main>
      </Fragment>
    )
}

export default Layout;