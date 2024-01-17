import React from 'react';
import { SideBarNav, SideBarWrap } from './Styles'
import { SideBarData } from './SideBarData';
import SubMenu from './SubMenu';

const SideBar = () => {
    return (
        <SideBarNav>
            <SideBarWrap>
                {
                    SideBarData.map( (item, index) => {
                        return (
                            <SubMenu page={item.page} 
                                     path={item.path} 
                                     icon={item.icon}
                                     opened={item.opened}
                                     closed={item.closed} 
                                     subMenu={item.subMenu}
                                     sub={item.sub}
                                     key={index}/>
                        )
                    })
                }    

            </SideBarWrap>
        </SideBarNav>
    )
}

export default SideBar;