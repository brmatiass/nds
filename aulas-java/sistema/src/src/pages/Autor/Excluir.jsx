import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { GradeSistema, Rodape } from '../../Components/Content/Style'
import PageHeaders from '../../Components/Header/PageHeaders'
import { INIT_AUTOR } from './Autor';
import { findAutorById, deleteAutorById } from "../../Service/AutorService";

const Excluir = (props) => {

  const { id } = props.match.params;
  const [autor, setAutor] = useState(INIT_AUTOR);

  useEffect(()=>{
    async function loadData() {
      const data = await findAutorById(id);
      console.log(data);
      setAutor(data);
    } 
    loadData(); 
  },[id])

  const onAutorSubmit= (e) =>{
    e.preventDefault();
    deleteAutorById(autor.id);
    setAutor(INIT_AUTOR)
  }

  return (
        <Fragment>  
        <div className="container">
         <div className="col-md-offset 4">   
          <PageHeaders 
                tituloPagina="Cadastro de Autores"
                path="/autor/listar"
                tituloPesquisa="Listagem de Autores"
                icon="user-plus"
                toReturn="list"
          /> 
          <GradeSistema>
          <div className="row col-8 mx-auto">
               <form onSubmit={(e) => onAutorSubmit(e)}>
               <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-8">
                       <div className="form-group">
                         <label className="form-label">Nome:</label>
                         <input type="text"
                                name="nome"
                                value={autor.nome}
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Data Nascimento:</label>
                         <input type="date"
                                name="dataNascimento"
                                value={autor.dataNascimento}
                                className="form-control"/>                       
                       </div>  
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">RG:</label>
                         <input type="text"
                                name="rg"   
                                value={autor.rg}
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">CPF:</label>
                         <input type="text"
                                name="cpf"
                                value={autor.cpf}
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Sexo:</label>
                         <input type="text"
                                name="sexo"
                                value={autor.sexo}
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
                                value={autor.endereco}
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Bairro:</label>
                         <input type="text"
                                name="bairro"
                                value={autor.bairro}
                                className="form-control"/>                       
                       </div>  
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-8">
                       <div className="form-group">
                         <label className="form-label">Cidade:</label>
                         <input type="text"
                                name="cidade"
                                value={autor.cidade}
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">CEP:</label>
                         <input type="text"
                                name="cep"
                                value={autor.cep}
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
                                value={autor.email}
                                className="form-control"/>                       
                       </div>  
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-6">
                       <div className="form-group">
                         <label className="form-label">Telefone Fixo:</label>
                         <input type="text"
                                name="telefoneFixo"
                                value={autor.telefoneFixo}
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-6">
                       <div className="form-group">
                         <label className="form-label">Celular:</label>
                         <input type="text"
                                name="telefoneMovel"
                                value={autor.telefoneMovel}
                                className="form-control"/>                       
                       </div>  
                     </div>
                 </div>
                 <input type='hidden' id='id' name='id' value={autor.id}/>
                 <Rodape>
                   <button type="submit"
                           className="btn btn-danger  btn-lg"
                           title="Salvar Registro!" >
                      Salvar
                   </button>
                   <Link to="/autor/listar"
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

export default Excluir


