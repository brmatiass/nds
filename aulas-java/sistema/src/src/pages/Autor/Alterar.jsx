import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GradeSistema, Rodape } from '../../Components/Content/Style'
import PageHeaders from '../../Components/Header/PageHeaders'
import { INIT_AUTOR } from './Autor';
import { findAutorById, updateAutor } from "../../Service/AutorService";
import ShowLivros from './ShowLivros';

const Alterar = (props) => {
  
  const { id } = props.match.params;
  const [autor, setAutor] = useState(INIT_AUTOR);
  const [showLivros, setShowLivros ] = useState(false);

  useEffect(()=>{
    async function loadData() {
      const data = await findAutorById(id);
      console.log(data);
      setAutor(data);
    } 
    loadData(); 
  },[id])

  const onChangeAutor = ( e ) => {
      const { name, value } = e.target;
      setAutor({ ...autor, [name]:value})
  }

  const onAutorSubmit= (e) =>{
    e.preventDefault();
    updateAutor(autor);
    setAutor(INIT_AUTOR)
  }
  

  const adicionarLivros = (e) => {
    setShowLivros(true)
  }

  const onShowModal = () => {
    setShowLivros(false)
  }


  const onChangeLivros = (e) => {

    const { value } = e.target; 

    console.log(value);

    let index = 0;
    for ( let i = 0; i < autor.livros; i++){
       if ( autor.livros[i].id == value ){
            autor.livros.splice(i,1)
            index = 1;
       }
    }
    if ( index !== 1 ){
      autor.livros.push({id:value})
    }

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
                                onChange={(e) => onChangeAutor(e)}
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Data Nascimento:</label>
                         <input type="date"
                                name="dataNascimento"
                                value={autor.dataNascimento}
                                onChange={(e) => onChangeAutor(e)}
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
                                onChange={(e) => onChangeAutor(e)}
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">CPF:</label>
                         <input type="text"
                                name="cpf"
                                value={autor.cpf}
                                onChange={(e) => onChangeAutor(e)}
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Sexo:</label>
                         <input type="text"
                                name="sexo"
                                value={autor.sexo}
                                onChange={(e) => onChangeAutor(e)}
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
                                onChange={(e) => onChangeAutor(e)}
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">Bairro:</label>
                         <input type="text"
                                name="bairro"
                                value={autor.bairro}
                                onChange={(e) => onChangeAutor(e)}
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
                                onChange={(e) => onChangeAutor(e)}
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-4">
                       <div className="form-group">
                         <label className="form-label">CEP:</label>
                         <input type="text"
                                name="cep"
                                value={autor.cep}
                                onChange={(e) => onChangeAutor(e)}
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
                                onChange={(e) => onChangeAutor(e)}
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
                                onChange={(e) => onChangeAutor(e)}
                                className="form-control"/>                       
                       </div>  
                     </div>
                     <div className="col-xs-12 col-sm-12 col-md-6">
                       <div className="form-group">
                         <label className="form-label">Celular:</label>
                         <input type="text"
                                name="telefoneMovel"
                                value={autor.telefoneMovel}
                                onChange={(e) => onChangeAutor(e)}
                                className="form-control"/>                       
                       </div>  
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-xs-12 col-sm-12 col-md-6">
                       <div className="form-group">
                         <label className="form-label">Livros:</label>
                         <input type="button"
                                id="livro"
                                value="Cadastrar Livros do Autor"
                                onClick={(e) => adicionarLivros(e)}
                                className="form-control" />
                       </div>  
                     </div>
                 </div>    
                 <input type='hidden' id='id' name='id' value={autor.id}/>
                 <Rodape>
                   <button type="submit"
                           className="btn btn-success  btn-lg"
                           title="Salvar Registro!" >
                      Salvar
                   </button>
                   <Link to="/autor/listar"
                         className="btn btn-secondary btn-lg ml-4" 
                         title="Cancelar a alteração do registro">
                      Cancelar     
                   </Link>   
                 </Rodape>
               </form>
            </div> 
          </GradeSistema>
          { 
            showLivros ? (
              <ShowLivros showModal={showLivros}
                          dadosLivrosCadastrados={autor.livros}
                          onShowModal={onShowModal}
                          onChangeChecked={onChangeLivros}
                          operacao={false}/>
            ): null 
          }
        </div>
      </div>
    </Fragment>    
    )
}

export default Alterar


