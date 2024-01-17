import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import { GradeSistema, Rodape } from '../../Components/Content/Style'
import PageHeaders from '../../Components/Header/PageHeaders';
import MensagemErro from '../../Components/Mensagem/MensagemErro';
import { createProduto } from '../../Service/ProdutoService';
import { INIT_PRODUTO, validateProdutoFromServer } from './Produto';
import { useFormProduto } from './userFormProduto';


const Inserir = () => {
    
  const { onChangeProduto, onProdutoSubmit, onClearProduto, submitting, produto, errorClient } = useFormProduto(INIT_PRODUTO); 
  const [errors, setErrors] = useState({});
  const onProdutoSubmitForm = (e) => {
      onProdutoSubmit(e);
      if ( submitting ){
         salvarProduto();  
         onClearProduto(); 
      } else {
         setErrors(errorClient);
      } 
         
    }

    async function salvarProduto(){
      const data = await createProduto(produto); 
      console.log(data.data); 
      if (data.data.status === 400 ){
          setErrors(validateProdutoFromServer(data.data.fields));
      }    
    }

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
               <form onSubmit={(e) => onProdutoSubmitForm(e)}>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-12">
                       <div className="form-group">
                         <label className="form-label">Nome:</label>
                         <input type="text"
                                name="nome"
                                value={produto.nome}
                                onChange={(e) => onChangeProduto(e)}
                                className={ errors.nome_valid === true 
                                            ? "form-control is-invalid" 
                                            : "form-control" } />
                          <MensagemErro 
                                error={errors.nome_valid} 
                                mensagem={errors.nome_mensagem} />
                       </div>  
                     </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-12">
                       <div className="form-group">
                         <label className="form-label">Categoria:</label>
                         <input type="text"
                                name="categoria"
                                value={produto.categoria}
                                onChange={(e) => onChangeProduto(e)}
                                className={ errors.categoria_valid === true 
                                  ? "form-control is-invalid" 
                                  : "form-control" }/>
                  <MensagemErro 
                      error={errors.categoria_valid} 
                      mensagem={errors.categoria_mensagem} />
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
                                  onChange={(e) => onChangeProduto(e)}
                                  className={ errors.estoque_valid === true 
                                    ? "form-control is-invalid" 
                                    : "form-control" }/>
                        <MensagemErro 
                          error={errors.estoque_valid} 
                          mensagem={errors.estoque_mensagem} />
                        </div>  
                      </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="form-group">
                      <label className="form-label">Preço:</label>
                      <input type="text"
                        name="preco"
                        value={produto.preco}
                        onChange={(e) => onChangeProduto(e)}
                        className="form-control"/>                       
                     </div>  
                    </div>
                 <input type='hidden' id='id' name='id' value={produto.id}/>
                 <Rodape>
                   <button type="submit"
                           className="btn btn-success  btn-lg"
                           title="Salvar Registro" >
                      Salvar
                   </button>
                   <Link to="/produto/listar"
                         className="btn btn-secondary btn-lg ml-4" 
                         title="Cancelar a inclusão do registro">
                      Cancelar     
                      </Link>   
                 </Rodape>
                 </div>
               </form>
            </div> 
          </GradeSistema>
        </div>
      </div>
    </Fragment>    
    )
}

export default Inserir