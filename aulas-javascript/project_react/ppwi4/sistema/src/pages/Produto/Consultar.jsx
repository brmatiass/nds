import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { GradeSistema, Rodape } from '../../Components/Content/Style'
import PageHeaders from '../../Components/Header/PageHeaders'
import { INIT_PRODUTO } from './Produto';
import { findProdutoById } from "../../Service/ProdutoService";

const Consultar = (props) => {

  const { id } = props.match.params;
  const [produto, setProduto] = useState(INIT_PRODUTO);

  useEffect(()=>{
    async function loadData() {
      const data = await findProdutoById(id);
      console.log(data);
      setProduto(data);
    } 
    loadData(); 
  },[id])


    return (
        <Fragment>  
        <div className="container">
         <div className="col-md-offset 4">   
            <PageHeaders 
                  tituloPagina="Cadastro de Produtos"
                  path="/produto/listar"
                  tituloPesquisa="Listagem de Produtos"
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
                                name="nome"
                                value={produto.nome}
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
                                value={produto.categoria}
                                className="form-control"/>                       
                       </div>  
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-8">
                       <div className="form-group">
                         <label className="form-label">Estoque:</label>
                         <input type="text"
                                name="estoque"
                                value={produto.estoque}
                                className="form-control"/>      
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Preço:</label>
                         <input type="text"
                                name="preco"
                                value={produto.preco}
                                className="form-control"/>                       
                       </div>  
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Fornecedores:</label>
                         <input type="text"
                                name="fornecedores"
                                value={produto.fornecedores}
                                className="form-control"/>                       
                       </div>  
                     </div>
                 </div>
                 
                 <input type='hidden' id='id' name='id' value={produto.id}/>
                 <Rodape>
                   <Link to="/produto/listar"
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

export default Consultar;