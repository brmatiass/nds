import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import { GradeSistema, Rodape } from '../../Components/Content/Style'
import PageHeaders from '../../Components/Header/PageHeaders'
import MensagemErro from '../../Components/Mensagem/MensagemErro';
import { createFornecedor } from '../../Service/FornecedorService';
import { INIT_FORNECEDOR, validateFornecedor } from './Fornecedor';
import ShowProduto from './ShowProdutos';
import {useFormFornecedor} from './userFormFornecedor';

const Inserir = () => {
    const {onChangeFornecedor, onFornecedorSubmit, onClearFornecedor, submitting, fornecedor, errorClient} = useFormFornecedor(INIT_FORNECEDOR);
    const [errors, setErrors] = useState({});
    const [showProduto, setShowProduto] = useState(false);
    const onFornecedorSubmitForm = (e) => {
      onFornecedorSubmit(e);
      if (submitting){
        salvarFornecedor();
        onClearFornecedor();
      }
      else {
        setErrors(errorClient);
      }
    }

    async function salvarFornecedor (){
      const data = await createFornecedor(fornecedor);
      console.log(data.data);
      if (data.data.status === 400) {
        setErrors(validateFornecedor(data.data.fields));
      }
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
      for (let i=0; i< fornecedor.produto; i++){
        if (fornecedor.produto[i].id === value){
          fornecedor.produto.splice(i,1)
          index =1;
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
                tituloPagina="Cadastro de Fornecedores"
                path="/fornecedor/listar"
                tituloPesquisa="Listagem de Fornecedores"
                icon="user-plus"
                toReturn="list"
          /> 
          <GradeSistema>
            <div className="row col-8 mx-auto">
               <form onSubmit={(e) => onFornecedorSubmitForm(e)}>
               <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-12">
                       <div className="form-group">
                         <label className="form-label">Nome:</label>
                         <input type="text"
                                name="snome"
                                value={fornecedor.snome}
                                onChange={(e) => onChangeFornecedor(e)}
                                className={errors.nome_valid === true
                                            ? "form-control is-invalid"
                                            : "form-control"}/>
                          <MensagemErro
                            error={errors.nome_valid}
                            mensagem={errors.nome_mensagem}/>                     
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
                                className={errors.categoria_valid === true
                                  ? "form-control is-invalid"
                                  : "form-control"}/>
                          <MensagemErro
                            error={errors.categoria_valid}
                            mensagem={errors.categoria_mensagem}/>
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
                                className={errors.contato_valid === true
                                  ? "form-control is-invalid"
                                  : "form-control"}/>
                          <MensagemErro
                            error={errors.contato_valid}
                            mensagem={errors.contato_mensagem}/>
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
                                className={errors.endereco_valid === true
                                  ? "form-control is-invalid"
                                  : "form-control"}/>
                          <MensagemErro
                            error={errors.endereco_valid}
                            mensagem={errors.endereco_mensagem}/>
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Bairro:</label>
                         <input type="text"
                                name="bairro"
                                value={fornecedor.bairro}
                                onChange={(e) => onChangeFornecedor(e)}
                                className={errors.bairro_valid === true
                                  ? "form-control is-invalid"
                                  : "form-control"}/>
                          <MensagemErro
                            error={errors.bairro_valid}
                            mensagem={errors.bairro_mensagem}/>
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
                                className={errors.cidade_valid === true
                                  ? "form-control is-invalid"
                                  : "form-control"}/>
                          <MensagemErro
                            error={errors.cidade_valid}
                            mensagem={errors.cidade_mensagem}/>
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Estado:</label>
                         <input type="text"
                                name="estado"
                                value={fornecedor.estado}
                                onChange={(e) => onChangeFornecedor(e)}
                                className={errors.estado_valid === true
                                  ? "form-control is-invalid"
                                  : "form-control"}/>
                          <MensagemErro
                            error={errors.estado_valid}
                            mensagem={errors.estado_mensagem}/>
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Pais:</label>
                         <input type="text"
                                name="pais"
                                value={fornecedor.pais}
                                onChange={(e) => onChangeFornecedor(e)}
                                className={errors.pais_valid === true
                                  ? "form-control is-invalid"
                                  : "form-control"}/>
                          <MensagemErro
                            error={errors.pais_valid}
                            mensagem={errors.pais_mensagem}/>
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
                         title="Cancelar a inclusão do registro">
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
                          operacao={false}/>
            ): null 
          }
        </div>
      </div>
    </Fragment>    
    )
}

export default Inserir