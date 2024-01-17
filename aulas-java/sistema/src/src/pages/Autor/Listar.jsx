import React, { Fragment, useEffect, useState } from 'react';
import Pagination from '../../Components/Table/Pagination';
import SelectNumberPage from "../../Components/Table/SelectNumberPages";
import {Link} from "react-router-dom";
import { GradeSistema } from '../../Components/Content/Style';
import PageHeaders from '../../Components/Header/PageHeaders';
import { findAllAutor, findAutorByName } from '../../Service/AutorService';
import SearchDataByName from '../../Components/Table/SearchDataByName';

const Listar = () => {
    
    const [dadosAutores, setDadosAutores] = useState([]);
    const [tamanhoPagina, setTamanhoPagina] = useState(5);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [totalPagina, setTotalPagina] = useState(0)
    const [atributo, setAtributo] = useState("id");
    const [dir, setDir] = useState("asc");
    const [nome, setNome] = useState("");


    useEffect( () => {
      async function loadDataAutores() {
        const dados = await findAllAutor( paginaAtual,tamanhoPagina, atributo, dir );
        setPaginaAtual(dados.pageable.pageNumber);
        setTotalPagina(dados.totalPages);
        setDadosAutores(dados.content);
      }
      loadDataAutores();
   },[paginaAtual, tamanhoPagina, atributo, dir ])
   

   useEffect( () => {
    async function loadDataAutorByName() {
      const dados = await findAutorByName( nome, paginaAtual,tamanhoPagina, atributo, dir );
      setPaginaAtual(dados.pageable.pageNumber);
      setTotalPagina(dados.totalPages);
      setDadosAutores(dados.content);
    }
    loadDataAutorByName();
 },[nome, paginaAtual, tamanhoPagina, atributo, dir ])
    
 const changePage = (pagina) => {
      setPaginaAtual(pagina - 1);
 } 
    
    const changePageSize = ( tamanho ) =>{
      console.log(tamanho);
      setTamanhoPagina(tamanho);
    }

    const onSortAtributo = (e, atributo)=>{
      const direcao = dir && dir === 'asc' ? 'desc' : 'asc'; 
      setDir(direcao);
      setAtributo(atributo);
    }

    const onChangeNome=(e)=>{
      setNome(e.target.value)
    }

    return(
      <Fragment>  
        <div className="container">
           <div className="col-md-offset 4">   
              <PageHeaders 
                  tituloPagina="Lista de Autores"
                  path="/dashbord"
                  tituloPesquisa="Página Principal"
                  icon="list"
                  toReturn="tachometer"
              />
              <GradeSistema>
              <div className="row">
                  <div className="row">
                      <div className="col-md-6">
                         <SelectNumberPage 
                             tamanhoPagina={tamanhoPagina}
                             changePageSize={(tamanho)=> changePageSize(tamanho)} />
                      </div>       
                      <div className="col-md-6">
                        <SearchDataByName
                              onChangeNome={(e)=>onChangeNome(e)}
                            />
                      </div> 
                  </div>  
                  <br/>  
                  <br/>  
                  <table id="tabela"
                         className="table table-striped table-bordered table-hover">
                     <thead>
                        <tr className="p-3 bg-success text-white">
                            <th className="text-center">
                              <button className="btn btn-link text-white" onClick={(e)=>onSortAtributo(e,'id')  }>
                                Id
                                { 
                                  atributo === "id" && ( <i className={`fa ${dir==='asc' ? 'fa-sort-asc':'fa-sort-desc' }`}></i>) 
                                }
                              </button>
                            </th>
                            <th className="text-center">
                              <button className="btn btn-link text-white" onClick={(e)=>onSortAtributo(e,'nome')}>
                                Nome
                                { 
                                  atributo === "nome" && ( <i className={`fa ${dir==='asc' ? 'fa-sort-asc':'fa-sort-desc' }`}></i>) 
                                }
                              </button> 
                            </th>
                            <th className="text-center">
                               <button className="btn btn-link text-white" onClick={(e)=>onSortAtributo(e,'email')}>
                                E-mail
                                { 
                                  atributo === "email" && ( <i className={`fa ${dir==='asc' ? 'fa-sort-asc':'fa-sort-desc' }`}></i>) 
                                }
                               </button>
                            </th>
                            <td className="text-center">Ações</td>
                        </tr>
                     </thead>
                     <tbody> 
                         { dadosAutores && dadosAutores.map(( autor ) => (
                              <tr key={autor.id}>
                                  <td className="text-center">{autor.id}</td>
                                  <td>{autor.nome}</td>
                                  <td>{autor.email}</td>
                                  <td className="text-center">
                                    <Link to={`/autor/alterar/${autor.id}`} 
                                          className="btn btn-info btn-sm"
                                          title="Alterar registro selecionado"
                                          ><i className="fa fa-pencil"></i>
                                          </Link>
                                    <Link to={`/autor/excluir/${autor.id}`} 
                                          className="btn btn-danger btn-sm"
                                          title="Excluir registro selecionado"
                                          ><i className="fa fa-trash"></i></Link>
                                    <Link to={`/autor/consultar/${autor.id}`}
                                          className="btn btn-secondary btn-sm"
                                          title="Consultar registro selecionado"
                                          ><i className="fa fa-search"></i></Link>
                                  </td>
                              </tr>
                         ))}
                          
                        
                         
                     </tbody>
                  </table>
               </div>
               <Pagination paginaAtual={paginaAtual}
                           totalPages={totalPagina}
                           changePage={(pagina) => changePage(pagina)}/>
               <Link to="/autor/inserir" 
                     className="btn btn-success btn-sm"
                     title="Incluir novo registro para autores"
               >Incluir <i className="fa fa-plus-circle"></i></Link>    

              </GradeSistema>
            </div> 
        </div>   
      </Fragment>
    )
} 

export default Listar;
