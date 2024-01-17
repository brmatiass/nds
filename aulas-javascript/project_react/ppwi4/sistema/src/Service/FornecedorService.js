import banco from "../Config/Banco";

export const findAllFornecedor = async ( paginaAtual, tamanhoPagina, atributo, dir ) => {
    return (
        banco({
            method:'GET',
            url:'/fornecedor/listar',
            params:{
              paginaAtual,
              tamanhoPagina,
              atributo,
              dir
            },
        }).then( (resposta) => {
            return resposta.data
        }).catch( ( errors ) => {
            return errors.response
        })
    )
}


export const findFornecedorByName = async ( nome, paginaAtual, tamanhoPagina, atributo, dir ) => {
    return (
        banco({
            method:'GET',
            url:`/fornecedor/listar/${nome}`,
            params:{
              paginaAtual,
              tamanhoPagina,
              atributo,
              dir
            },
        }).then( (resposta) => {
            return resposta.data
        }).catch( ( errors ) => {
            return errors.response
        })
    )
}

export const findFornecedorById = async ( id ) => {
    return (
        banco({
             method:'get',  
             url:`/fornecedor/buscar/${id}`,
        }).then( (resposta) => {
            return resposta.data
        }).catch( (errors) => {   
            return errors.response;
        })
    )
}

export const createFornecedor = async ( fornecedor ) => {
    return (
        banco({
            method:'post',
            url:'/fornecedor/inserir',
            data:fornecedor
        }).then ((resposta)=>{
            return resposta.data
        }).catch((errors)=>{
            return errors.response;
        })
    )
}

export const updateFornecedor = async ( fornecedor ) => {
    return (
        banco({
            method:'post',
            url:'/fornecedor/alterar',
            data:fornecedor
        }).then ((resposta)=>{
            return resposta.data
        }).catch((errors)=>{
            return errors.response;
        })
    )
}

export const deleteFornecedorById = async ( id ) => {
    return (
        banco({
             method:'delete',  
             url:`/fornecedor/delete/${id}`,
        }).then( (resposta) => {
            return resposta.data
        }).catch( (errors) => {   
            return errors.response;
        })
    )
}