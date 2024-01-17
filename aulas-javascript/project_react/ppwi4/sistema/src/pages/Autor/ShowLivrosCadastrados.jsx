import React,  { Fragment, useState } from "react";
import { GradeSistema } from "../../Components/Content/Style";
import { Button, Modal } from "react-bootstrap";
import SelectNumberPage from "../../Components/Table/SelectNumberPages";
import Pagination from "../../Components/Table/Pagination";


const ShowLivrosCadastrados = ({showModal, dadosLivrosCadastrados, onShowModal }) => {
    const [tamanhoPagina, setTamanhoPagina] = useState(5);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [totalPagina, setTotalPagina] = useState(dadosLivrosCadastrados.length)
    const [dadosLivros, setDadosLivros ] = useState(dadosLivrosCadastrados);
    const [atributo, setAtributo] = useState("id");
    const [dir, setDir] = useState("asc");


    const changePage = (pagina) => {
       setPaginaAtual(pagina - 1);
    } 
      
    const changePageSize = ( tamanho ) =>{
        setTamanhoPagina(tamanho);
    }
    
    const onCloseModal = (e) => {
        onShowModal();
    }

    const onSortAtributo = (e, atributo)=>{
        const direcao = dir && dir === 'asc' ? 'desc' : 'asc'; 
        setDir(direcao);
        setAtributo(atributo);
    }
  
    return(
        <Fragment>
            <div className="container pt-5">
                <GradeSistema>
                    <div className="row col-8 mx-auto">
                        <Modal show={showModal}
                               size="lg"
                               aria-labelledby="contained-modal-title-vcenter"
                               centered>
                            <Modal.Header>
                                <Modal.Title>Listagem de Livros</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                               <div className="row"> 
                                    <div className="row">
                                            <div className="col-md-6">
                                                <SelectNumberPage 
                                                    tamanhoPagina={tamanhoPagina}
                                                    changePageSize={(tamanho)=> changePageSize(tamanho)} />
                                            </div>       
                                    </div> 
                                    <table id="tabela" className="table table-striped table-bordered table-hover">
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
                                                    <button className="btn btn-link text-white" onClick={(e)=>onSortAtributo(e,'tituloLivro')}>
                                                        Nome
                                                        { 
                                                            atributo === "tituloLivro" && ( <i className={`fa ${dir==='asc' ? 'fa-sort-asc':'fa-sort-desc' }`}></i>) 
                                                        }
                                                    </button> 
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody> 
                                            { dadosLivros && dadosLivros.map(( livro ) => (
                                                <tr key={livro.id}>
                                                    <td className="text-center">{livro.id}</td>
                                                    <td>{livro.tituloLivro}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table> 
                                    <Pagination 
                                        paginaAtual={paginaAtual}
                                        totalPages={totalPagina}
                                        changePage={(page)=> changePage(page)}/>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={(e) => onCloseModal(e)}>Fechar</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </GradeSistema> 
            </div>
        </Fragment>
    ) 

}

export default ShowLivrosCadastrados;