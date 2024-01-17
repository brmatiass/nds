import React from 'react';

import * as FaIcons from 'react-icons/fa';
//import * as IoIcons from 'react-icon/ai';
import * as RiIcons from 'react-icons/ri';

export const SideBarData = [
    {
       page:'Página Principal',
       path:'/dashboard', 
       icon: <FaIcons.FaHome/>,
       sub:false, 
    },
    {
       page:'Cadastro',
       path:'#',
       icon:<FaIcons.FaFile/>,
       closed:<RiIcons.RiArrowDownSFill/>,
       opened:<RiIcons.RiArrowUpSFill/>,
       sub:true,
       subMenu:[
           {
              page:'Cliente',
              path:'/cliente/listar',
              icon:<FaIcons.FaUser/>,
           },
           {
              page:'Fornecedor',
              path:'/fornecedor/listar',
              icon:<RiIcons.RiBuilding4Line/>,
           },
           {
               page:'Produto',
               path:'/produto/listar',
               icon:<FaIcons.FaBookOpen/>
           }

       ]

       
    },
    {
        page:'Relatórios',
        path:'/dashboard', 
        icon: <FaIcons.FaHome/>,
        sub:false, 
     },{
        page:'Segurança',
        path:'/dashboard', 
        icon: <FaIcons.FaHome/>,
        sub:false, 
     },
]

