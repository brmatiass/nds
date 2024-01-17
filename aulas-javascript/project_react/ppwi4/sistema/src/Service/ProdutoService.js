import banco from "../Config/Banco";

export const findAllProduto = async ( paginaAtual, tamanhoPagina, atributo, dir ) => {
    return (
        banco({
            method:'GET',
            url:'/produto/listar',
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


export const findProdutoByName = async ( nome, paginaAtual, tamanhoPagina, atributo, dir ) => {
    return (
        banco({
            method:'GET',
            url:`/produto/listar/${nome}`,
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

export const findProdutoById = async ( id ) => {
    return (
        banco({
             method:'get',  
             url:`/produto/buscar/${id}`,
        }).then( (resposta) => {
            return resposta.data
        }).catch( (errors) => {   
            return errors.response;
        })
    )
}

export const createProduto = async ( produto ) => {
    return (
        banco({
            method:'post',
            url:'/produto/inserir',
            data:produto
        }).then ((resposta)=>{
            return resposta.data
        }).catch((errors)=>{
            return errors.response;
        })
    )
}

export const updateProduto = async ( produto ) => {
    return (
        banco({
            method:'post',
            url:'/produto/alterar',
            data:produto
        }).then ((resposta)=>{
            return resposta.data
        }).catch((errors)=>{
            return errors.response;
        })
    )
}

export const deleteProdutoById = async ( id ) => {
    return (
        banco({
             method:'delete',  
             url:`/produto/delete/${id}`,
        }).then( (resposta) => {
            return resposta.data
        }).catch( (errors) => {   
            return errors.response;
        })
    )
}
