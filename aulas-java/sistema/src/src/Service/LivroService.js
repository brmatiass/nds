
import banco from "../Config/Banco";

export const findAllLivros = async ( paginaAtual, tamanhoPagina, atributo, dir ) => {
    return (
        banco({
            method:'GET',
            url:'/livro/listar',
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


export const findLivroByName = async ( nome, paginaAtual, tamanhoPagina, atributo, dir ) => {
    return (
        banco({
            method:'GET',
            url:`/livro/listar/${nome}`,
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

export const findLivroById = async ( id ) => {
    return (
        banco({
             method:'get',  
             url:`/livro/buscar/${id}`,
        }).then( (resposta) => {
            return resposta.data
        }).catch( (errors) => {   
            return errors.response;
        })
    )
}

export const createLivro = async ( livro ) => {
    return (
        banco({
            method:'post',
            url:'/livro/inserir',
            data:livro
        }).then ((resposta)=>{
            return resposta.data
        }).catch((errors)=>{
            return errors.response;
        })
    )
}

export const updateLivro = async ( livro ) => {
    return (
        banco({
            method:'post',
            url:'/autor/alterar',
            data:livro
        }).then ((resposta)=>{
            return resposta.data
        }).catch((errors)=>{
            return errors.response;
        })
    )
}

export const deleteLivroById = async ( id ) => {
    return (
        banco({
             method:'delete',  
             url:`/livro/delete/${id}`,
        }).then( (resposta) => {
            return resposta.data
        }).catch( (errors) => {   
            return errors.response;
        })
    )
}



