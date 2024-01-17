import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GradeSistema, Rodape } from '../../Components/Content/Style'
import PageHeaders from '../../Components/Header/PageHeaders'
import { INIT_FORNECEDOR } from './Fornecedor';
import { findFornecedorById, updateFornecedor } from "../../Service/FornecedorService";
import ShowProduto from './ShowProdutos';

const Alterar = (props) => {
  
  const { id } = props.match.params;
  const [fornecedor, setFornecedor] = useState(INIT_FORNECEDOR);
  const [showProduto, setShowProduto] = useState(false);

  useEffect(()=>{
    async function loadData() {
      const data = await findFornecedorById(id);
      console.log(data);
      setFornecedor(data);
    } 
    loadData(); 
  },[id])

  const onChangeFornecedor = ( e ) => {
      const { name, value } = e.target;
      setFornecedor({ ...fornecedor, [name]:value})
  }

  const onFornecedorSubmit= (e) =>{
    e.preventDefault();
    updateFornecedor(fornecedor);
    setFornecedor(INIT_FORNECEDOR)
  }

  const adicionarProduto = (e) => {
    setShowProduto(true)
  }
  
  const onShowModal = () => {
    setShowProduto(false)
  }

  const onChangeProduto = (e) => {
    const {value} = e.target;
    console.log(value);
    let index = 0;

    for ( let i = 0; i < fornecedor.produto; i++){
      if (fornecedor.produto[i].id === value){
        fornecedor.produto.splice(i,1)
        index = 1;
      }
    }
    if (index !== 1){
      fornecedor.produto.push({id:value})
    }
  }

    return (
      <Fragment>  
      <div className="container">
       <div className="col-md-offset 4">   
        <PageHeaders 
              tituloPagina="Cadastro de Fornecedors"
              path="/fornecedor/listar"
              tituloPesquisa="Listagem de Fornecedors"
              icon="user-plus"
              toReturn="list"
        /> 
        <GradeSistema>
          <div className="row col-8 mx-auto">
             <form onSubmit={(e) => onFornecedorSubmit(e)}>
             <div className="row">
                   <div className="col-xs-12 col-sm-12 col-md-12">
                     <div className="form-group">
                       <label className="form-label">Nome:</label>
                       <input type="text"
                              name="snome"
                              value={fornecedor.snome}
                              onChange={(e) => onChangeFornecedor(e)}
                              className="form-control"/>                       
                     </div>  
                   </div>
               </div>
               <div className="row">
                   <div className="col-xs-12 col-sm-12 col-md-12">
                     <div className="form-group">
                       <label className="form-label">Categoria:</label>
                       <input type="text"
                              name="categoria"
                              value={fornecedor.categoria}
                              onChange={(e) => onChangeFornecedor(e)}
                              className="form-control"/>                       
                     </div>  
                   </div>
               </div>
               <div className="row">
                   <div className="col-xs-12 col-sm-12 col-md-12">
                     <div className="form-group">
                       <label className="form-label">E-mail:</label>
                       <input type="text"
                              name="contato"
                              value={fornecedor.contato}
                              onChange={(e) => onChangeFornecedor(e)}
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
                              value={fornecedor.endereco}
                              onChange={(e) => onChangeFornecedor(e)}
                              className="form-control"/>                       
                     </div>  
                   </div>
                   <div className="col-xs-12 col-sm-12 col-md-4">
                     <div className="form-group">
                       <label className="form-label">Bairro:</label>
                       <input type="text"
                              name="bairro"
                              value={fornecedor.bairro}
                              onChange={(e) => onChangeFornecedor(e)}
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
                              value={fornecedor.cidade}
                              onChange={(e) => onChangeFornecedor(e)}
                              className="form-control"/>                       
                     </div>  
                   </div>
                   <div className="col-xs-12 col-sm-12 col-md-4">
                     <div className="form-group">
                       <label className="form-label">Estado:</label>
                       <input type="text"
                              name="estado"
                              value={fornecedor.estado}
                              onChange={(e) => onChangeFornecedor(e)}
                              className="form-control"/>                       
                     </div>  
                   </div>
                   <div className="col-xs-12 col-sm-12 col-md-4">
                     <div className="form-group">
                       <label className="form-label">Pais:</label>
                       <input type="text"
                              name="pais"
                              value={fornecedor.pais}
                              onChange={(e) => onChangeFornecedor(e)}
                              className="form-control"/>                       
                     </div>  
                   </div>
               </div>
               <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-6">
                       <div className="form-group">
                         <label className="form-label">Produtos:</label>
                         <input type="button"
                                id="produto"
                                value="Cadastrar produtos do fornecedor"
                                onClick={(e) => adicionarProduto(e)}
                                className="form-control" />
                       </div>  
                     </div>
                 </div>    
               <input type='hidden' id='id' name='id' value={fornecedor.id}/>
                 <Rodape>
                   <button type="submit"
                           className="btn btn-success  btn-lg"
                           title="Salvar Registro!" >
                      Salvar
                   </button>
                   <Link to="/fornecedor/listar"
                         className="btn btn-secondary btn-lg ml-4" 
                         title="Cancelar a alteração do registro">
                      Cancelar     
                   </Link>   
                 </Rodape>
               </form>
            </div> 
          </GradeSistema>
          {showProduto ? (
            <ShowProduto showModal={showProduto}
                          dadosProdutoCadastrado={fornecedor.produto}
                          onShowModal={onShowModal}
                          onChangeChecked={onChangeProduto}
                          operacao={false}/>) :null
          }
        </div>
      </div>
    </Fragment>    
    )
}

export default Alterar