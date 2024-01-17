import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { GradeSistema, Rodape } from '../../Components/Content/Style'
import PageHeaders from '../../Components/Header/PageHeaders'
import { INIT_FORNECEDOR } from './Fornecedor';
import { findFornecedorById } from "../../Service/FornecedorService";
import ShowProdutoCadastrado from "./ShowProdutoCadastrado"

const Consultar = (props) => {

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

  const onShowModal = () => {
    setShowProduto(false)
  }

  const adicionarProduto = (e) => {
    setShowProduto(true)
  }

    return (
        <Fragment>  
        <div className="container">
         <div className="col-md-offset 4">   
            <PageHeaders 
                  tituloPagina="Cadastro de Fornecedores"
                  path="/fornecedor/listar"
                  tituloPesquisa="Listagem de Fornecedores"
                  icon="user-plus"
                  toReturn="list"
            /> 
            <GradeSistema>
            <div className="row col-8 mx-auto">
               <form>
               <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-12">
                       <div className="form-group">
                         <label className="form-label">Nome:</label>
                         <input type="text"
                                name="snome"
                                value={fornecedor.snome}
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
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Bairro:</label>
                         <input type="text"
                                name="bairro"
                                value={fornecedor.bairro}
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
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Estado:</label>
                         <input type="text"
                                name="estado"
                                value={fornecedor.estado}
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Pais:</label>
                         <input type="text"
                                name="pais"
                                value={fornecedor.pais}
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
                   <Link to="/fornecedor/listar"
                         className="btn btn-secondary btn-lg ml-4" 
                         title="Cancelar a inclusão do registro">
                      Cancelar     
                   </Link>   
                 </Rodape>
               </form>
            </div> 
          </GradeSistema>
          {showProduto ? (
              <ShowProdutoCadastrado showModal={showProduto}
                          dadosProdutoCadastrado={fornecedor.produto}
                          onShowModal={onShowModal}
                          />
            ): null 
          }
        </div>
      </div>
    </Fragment>    
    )
}

export default Consultar;