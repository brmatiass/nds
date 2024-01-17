import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GradeSistema, Rodape } from '../../Components/Content/Style'
import PageHeaders from '../../Components/Header/PageHeaders'
import { INIT_CLIENTE } from './Cliente';
import { findClienteById, updateCliente } from "../../Service/ClienteService";

const Alterar = (props) => {
  
  const { id } = props.match.params;
  const [cliente, setCliente] = useState(INIT_CLIENTE);

  useEffect(()=>{
    async function loadData() {
      const data = await findClienteById(id);
      console.log(data);
      setCliente(data);
    } 
    loadData(); 
  },[id])

  const onChangeCliente = ( e ) => {
      const { name, value } = e.target;
      setCliente({ ...cliente, [name]:value})
  }

  const onClienteSubmit= (e) =>{
    e.preventDefault();
    updateCliente(cliente);
    setCliente(INIT_CLIENTE)
  }
  

    return (
        <Fragment>  
        <div className="container">
         <div className="col-md-offset 4">   
          <PageHeaders 
                tituloPagina="Cadastro de Clientes"
                path="/cliente/listar"
                tituloPesquisa="Listagem de Clientes"
                icon="user-plus"
                toReturn="list"
          /> 
          <GradeSistema>
          <div className="row col-8 mx-auto">
               <form onSubmit={(e) => onClienteSubmit(e)}>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-12">
                       <div className="form-group">
                         <label className="form-label">Nome:</label>
                         <input type="text"
                                name="nome"
                                value={cliente.nome}
                                onChange={(e) => onChangeCliente(e)}
                                className="form-control"/>                       
                       </div>  
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-12">
                       <div className="form-group">
                         <label className="form-label">E-mail:</label>
                         <input type="text"
                                name="email"
                                value={cliente.email}
                                onChange={(e) => onChangeCliente(e)}
                                className="form-control"/>                       
                       </div>  
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-8">
                       <div className="form-group">
                         <label className="form-label">Endereço:</label>
                         <input type="text"
                                name="endereco"
                                value={cliente.endereco}
                                onChange={(e) => onChangeCliente(e)}
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Bairro:</label>
                         <input type="text"
                                name="bairro"
                                value={cliente.bairro}
                                onChange={(e) => onChangeCliente(e)}
                                className="form-control"/>                       
                       </div>  
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Cidade:</label>
                         <input type="text"
                                name="cidade"
                                value={cliente.cidade}
                                onChange={(e) => onChangeCliente(e)}
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Estado:</label>
                         <input type="text"
                                name="estado"
                                value={cliente.estado}
                                onChange={(e) => onChangeCliente(e)}
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Pais:</label>
                         <input type="text"
                                name="pais"
                                value={cliente.pais}
                                onChange={(e) => onChangeCliente(e)}
                                className="form-control"/>                       
                       </div>  
                     </div>
                 </div>
                 
                 <input type='hidden' id='id' name='id' value={cliente.id}/>
                 <Rodape>
                   <button type="submit"
                           className="btn btn-success  btn-lg"
                           title="Salvar Registro!" >
                      Salvar
                   </button>
                   <Link to="/cliente/listar"
                         className="btn btn-secondary btn-lg ml-4" 
                         title="Cancelar a alteração do registro">
                      Cancelar     
                   </Link>   
                 </Rodape>
               </form>
            </div> 
          </GradeSistema>
        </div>
      </div>
    </Fragment>    
    )
}

export default Alterar