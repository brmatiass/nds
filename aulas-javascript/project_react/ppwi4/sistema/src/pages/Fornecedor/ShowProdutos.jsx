
import React,  { Fragment, useState, useEffect } from "react";
import { GradeSistema } from "../../Components/Content/Style";
import { Button, Modal } from "react-bootstrap";
import SelectNumberPage from "../../Components/Table/SelectNumberPages";
import SearchDataByName from '../../Components/Table/SearchDataByName';
import { findAllProduto, findProdutoByName } from "../../Service/ProdutoService";
import Pagination from "../../Components/Table/Pagination";

const ShowProduto = ({showModal, dadosProdutoCadastrado, onShowModal, onChangeChecked, operacao }) => {
    const [tamanhoPagina, setTamanhoPagina] = useState(5);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [totalPagina, setTotalPagina] = useState(0)
    const [nome, setNome] = useState("");
    const [dadosProduto, setDadosProduto ] = useState([{}]);
    const [atributo, setAtributo] = useState("id");
    const [dir, setDir] = useState("asc");

    useEffect(() => {
        async function loadProduto() {
            const produto=[];
            const dados = await findAllProduto(paginaAtual, tamanhoPagina, atributo, dir );
            setPaginaAtual(dados.pageable.pageNumber);
            setTotalPagina(dados.totalPages);
            
            for (let i = 0; i < dados.content.length; i++ ){
                produto.push({
                    id:dados.content[i].id,
                    nome: dados.content[i].nome,
                    check:false,
                })
            } 
            if (dadosProdutoCadastrado){ 
                for (let i = 0; produto.length; i++ ){
                    for ( let j = 0; j < dadosProdutoCadastrado.length; j++ ){
                        if (produto[i].id === dadosProdutoCadastrado[j].id){
                            produto[i].check = true;
                        }
                    }   
                }
            }
            setDadosProduto(produto); 
        }
        loadProduto();
    }, [ paginaAtual, tamanhoPagina, atributo, dir  ]);

    useEffect(() => {
        async function loadDataProdutoByName() {
            const produto=[];
            const dados = await findProdutoByName (nome, paginaAtual, tamanhoPagina, atributo, dir);
            setPaginaAtual(dados.pageable.pageNumber);
            setTotalPagina(dados.totalPages);

            for (let i=0; i<dados.content.length; i++){
                produto.push({
                    id: dados.content[i].id,
                    nome: dados.content[i].nome,
                    check: false,
                })
            }

        if (dadosProdutoCadastrado){
            for (let i=0; i<produto.length; i++){
                for (let j=0; j<dadosProdutoCadastrado.length; j++){
                    if (produto[i].id === dadosProdutoCadastrado[j].id){
                        produto[i].check = true;
                    }
                }
            }
        }
        setDadosProduto(produto);
        }
        loadDataProdutoByName();
    },[nome, paginaAtual, tamanhoPagina, atributo, dir])


    const changePage = (pagina) => {
        setPaginaAtual(pagina - 1);
    }

    const changePageSize = ( tamanho ) =>{
        setTamanhoPagina(tamanho);
    }
    
    const onCloseModal = (e) => {
        onShowModal();
    }

    const onChangeNome=(e)=>{
      setNome(e.target.value)
    }

    const onChangeCheckedProduto = (e) => {
        onChangeChecked(e);
        const listaProduto = [...dadosProduto];
        let index = listaProduto.findIndex((l)=>l.id === e.target.value);
        listaProduto[index].check = !listaProduto[index].check;
        setDadosProduto(listaProduto);
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
                                <Modal.Title>Listagem de Produtos:</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
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
                                    <table id="tabela" className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr className="p-3 bg-success text-white">
                                                <th className="text-center">
                                                    <button className="btn btn-link text-white" onClick={(e)=>onSortAtributo(e,'id')  }>
                                                        Id
                                                        {atributo === "id" && ( <i className={`fa ${dir==='asc' ? 'fa-sort-asc':'fa-sort-desc' }`}></i>) }                                 
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
                                                <td className="text-center">Ações</td>
                                            </tr>
                                        </thead>
                                        <tbody> 
                                            { dadosProduto && dadosProduto.map(( produto ) => (
                                                <tr key={produto.id}>
                                                    <td className="text-center">{produto.id}</td>
                                                    <td>{produto.nome}</td>
                                                    <td className="text-center">
                                                       <input type="checkBox"
                                                              checked={produto.check}
                                                              value={produto.id}
                                                              onChange={
                                                                  operacao === false ? (e) => onChangeCheckedProduto(e) : null
                                                              }  />
                                                    </td>
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
                                <Button variant="primary" onClick={(e) => onCloseModal(e)}>Salvar</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </GradeSistema> 
            </div>
        </Fragment>
    ) 
}

export default ShowProduto;