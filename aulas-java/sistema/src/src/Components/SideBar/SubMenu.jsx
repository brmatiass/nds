import React, { Fragment, useState } from 'react';
import { SideBarLink, DropdownLink, SideBarLabel } from './Styles';



const SubMenu = ( {  page, path, icon, opened, closed, subMenu, sub  }) => {
   const [submenu, setSubMenu] = useState(false); 

   return (
      
        <Fragment>
            <SideBarLink to={path} onClick={() => setSubMenu(!submenu)}>
              <div>
                 {icon}
                 <SideBarLabel>{page}</SideBarLabel>     
              </div> 
              <div>
                 { 
                     
                    submenu === true && sub === true  
                      ? opened     
                      : subMenu
                      ? closed
                      : null
                 }   

              </div>
            </SideBarLink>
            {
                submenu && sub && (
                    subMenu.map( ( item, index ) => {
                       return (
                          <DropdownLink to={item.path} key={index}>
                             {item.icon}
                             <SideBarLabel>{item.page}</SideBarLabel>   
                          </DropdownLink>  
                       ) 
                    })

                    )
            }
        </Fragment>
    )
}

export default SubMenu;


