import React from 'react';
import PageHeaders from "../../Components/Header/PageHeaders";


const Dashboard = () => {
    return (
        <div className="container">
            <div className="col-md-offset 4">   
                <PageHeaders 
                    tituloPagina="Página Principal"
                    path="#"
                    tituloPesquisa="#"
                    icon="tachometer"
                    toReturn="" /> 
                </div>
        </div>    
    )
}

export default Dashboard;