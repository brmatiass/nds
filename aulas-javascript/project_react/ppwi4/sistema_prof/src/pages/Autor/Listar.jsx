import React, { Fragment, useEffect, useState } from 'react';
import Pagination from '../../Components/Table/Pagination';
import {Link} from "react-router-dom";
import { GradeSistema } from '../../Components/Content/Style';
import PageHeaders from '../../Components/Header/PageHeaders';
import { findAllAutor } from '../../Service/AutorService';

const tamanhoDaPagina = [5,10,15,20];

const Listar = () => {
    
    const [dadosAutores, setDadosAutores] = useState([]);

    const [tamanhoPagina, setTamanhoPagina] = useState(5);

    const [paginaAtual, setPaginaAtual] = useState(1);

    const [totalPagina, setTotalPagina] = useState(0)

    useEffect( () => {
      async function loadDataAutores() {
        const dados = await findAllAutor( paginaAtual,tamanhoPagina );
        //console.log(dados.pageable.pageSize);
        //console.log(dados.pageable.pageNumber);
        //console.log(dados.totalPages);
        setPaginaAtual(dados.pageable.pageNumber);
        setTotalPagina(dados.totalPages);
        setDadosAutores(dados.content);
      }
      loadDataAutores();
   },[tamanhoPagina,paginaAtual])


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
                          <div className="form-group row">
                             <label className="col-form-label col-12 col-md-4 col-sm-1">Tamanho Página:</label>
                             <div className="col-8 col-sm-6 col-md-2 offset-md-1"> 
                                <select className="form-control" 
                                        onChange={(e)=>setTamanhoPagina(e.target.value)}
                                        value={tamanhoPagina}>
                                    {
                                      tamanhoDaPagina.map((size)=>(
                                        <option key={size} value={size}>
                                          {size}
                                        </option>  
                                      ))
                                    }
                                </select>
                             </div> 
                         </div>
                      </div>
                      <div className="col-md-6">
                        <form>
                          <div className="row">
                            <label className="col-form-label col-12 col-sm-1">Nome:</label>
                            <div className="col-9 col-sm-9 col-md-9 offset-md-1">
                               <input className="form-control"/>
                            </div>
                          </div>  
                        </form>  
                      </div> 
                  </div>  

                  <table id="tabela"
                         className="table table-striped table-bordered table-hover">
             
                     <thead>
                        <tr className="p-3 bg-success text-white">
                            <th className="text-center">Id</th>
                            <th className="text-center">Nome</th>
                            <th className="text-center">E-mail</th>
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
                                    <Link to="/autor/alterar" 
                                          className="btn btn-info btn-sm"
                                          title="Alterar registro selecionado"
                                          ><i className="fa fa-pencil"></i>
                                          </Link>
                                    <Link to="/autor/excluir" 
                                          className="btn btn-danger btn-sm"
                                          title="Excluir registro selecionado"
                                          ><i className="fa fa-trash"></i></Link>
                                    <Link to="/autor/consultar"
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
                           totalPages={totalPagina}/>
               <Link to="/autor/incluir" 
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
