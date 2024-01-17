import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import { GradeSistema, Rodape } from '../../Components/Content/Style'
import PageHeaders from '../../Components/Header/PageHeaders';
import MensagemErro from '../../Components/Mensagem/MensagemErro';
import { createCliente } from '../../Service/ClienteService';
import { INIT_CLIENTE, validateClienteFromServer } from './Cliente';
// import ShowFornecedores from './ShowFornecedores';
import { useFormCliente } from './userFormCliente';


const Inserir = () => {
    
  const { onChangeCliente, onClienteSubmit, onClearCliente, submitting, cliente, errorClient } = useFormCliente(INIT_CLIENTE); 
  const [errors, setErrors] = useState({});
  const [showFornecedores, setShowFornecedores ] = useState(false); 
  const onClienteSubmitForm = (e) => {
      onClienteSubmit(e);
      if ( submitting ){
         salvarCliente();  
         onClearCliente(); 
      } else {
         setErrors(errorClient);
      } 
         
    }


    async function salvarCliente(){
      const data = await createCliente(cliente); 
      console.log(data.data); 
      if (data.data.status === 400 ){
          setErrors(validateClienteFromServer(data.data.fields));
      }    
    }

    const adicionarFornecedores = (e) => {
        setShowFornecedores(true)
    }

    const onShowModal = () => {
      setShowFornecedores(false)
    }


    const onChangeFornecedores = (e) => {
      const { value } = e.target; 
      let index = 0;
      for ( let i = 0; i < cliente.listaClientesFornecedores; i++){
         if ( cliente.listaClientesFornecedores[i].id == value ){
              cliente.listaClientesFornecedores.splice(i,1)
              index = 1;
         }
      }
      if ( index !== 1 ){
        cliente.listaClientesFornecedores.push({id:value})
      }

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
                                id="nome"
                                value={cliente.nome}
                                onChange={(e) => onChangeCliente(e)}
                                className="form-control"/>     
                          <MensagemErro 
                                error={errors.nome_valid} 
                                mensagem={errors.nome_mensagem} />              
                       </div>  
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-12">
                       <div className="form-group">
                         <label className="form-label">E-mail:</label>
                         <input type="text"
                                name="email"
                                id="email"
                                value={cliente.email}
                                onChange={(e) => onChangeCliente(e)}
                                className="form-control"/>
                          
                          <MensagemErro
                                      error={errors.nome_valid}
                                      mensagem={errors.email_mensagem} />
                       </div>  
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-8">
                       <div className="form-group">
                         <label className="form-label">Endereço:</label>
                         <input type="text"
                                name="endereco"
                                id="endereco"
                                value={cliente.endereco}
                                onChange={(e) => onChangeCliente(e)}
                                className="form-control"/>
                          <MensagemErro
                                      error={errors.nome_valid}
                                      mensagem={errors.endereco_mensagem} />
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Bairro:</label>
                         <input type="text"
                                name="bairro"
                                id="bairro" 
                                value={cliente.bairro}
                                onChange={(e) => onChangeCliente(e)}
                                className="form-control"/>
                          <MensagemErro
                                      error={errors.nome_valid}
                                      mensagem={errors.bairro_mensagem} />
                       </div>  
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Cidade:</label>
                         <input type="text"
                                name="cidade"
                                id="cidade"
                                value={cliente.cidade}
                                onChange={(e) => onChangeCliente(e)}
                                className="form-control"/>
                          <MensagemErro
                                      error={errors.nome_valid}
                                      mensagem={errors.cidade_mensagem} />    
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Estado:</label>
                         <input type="text"
                                name="estado"
                                id="cep"
                                value={cliente.estado}
                                onChange={(e) => onChangeCliente(e)}
                                className="form-control"/>     
                          <MensagemErro
                                      error={errors.nome_valid}
                                      mensagem={errors.estado_mensagem} />                  
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Pais:</label>
                         <input type="text"
                                name="pais"
                                id="pais"
                                value={cliente.pais}
                                onChange={(e) => onChangeCliente(e)}
                                className="form-control"/> 
                          <MensagemErro
                                      error={errors.nome_valid}
                                      mensagem={errors.pais_mensagem} />                      
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
                         title="Cancelar a inclusão do registro">
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

export default Inserir