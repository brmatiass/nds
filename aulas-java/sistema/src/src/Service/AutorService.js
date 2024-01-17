
import banco from "../Config/Banco";

export const findAllAutor = async ( paginaAtual, tamanhoPagina, atributo, dir ) => {
    return (
        banco({
            method:'GET',
            url:'/autor/listar', 
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


export const findAutorByName = async ( nome, paginaAtual, tamanhoPagina, atributo, dir ) => {
    return (
        banco({
            method:'GET',
            url:`/autor/listar/${nome}`,
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

export const findAutorById = async ( id ) => {
    return (
        banco({
             method:'get',  
             url:`/autor/buscar/${id}`,
        }).then( (resposta) => {
            return resposta.data
        }).catch( (errors) => {   
            return errors.response;
        })
    )
}

export const createAutor = async ( autor ) => {
    return (
        banco({
            method:'post',
            url:'/autor/inserir',
            data:autor
        }).then ((resposta)=>{
            return resposta.data
        }).catch((errors)=>{
            return errors.response;
        })
    )
}

export const updateAutor = async ( autor ) => {
    return (
        banco({
            method:'post',
            url:'/autor/alterar',
            data:autor
        }).then ((resposta)=>{
            return resposta.data
        }).catch((errors)=>{
            return errors.response;
        })
    )
}

export const deleteAutorById = async ( id ) => {
    return (
        banco({
             method:'delete',  
             url:`/autor/delete/${id}`,
        }).then( (resposta) => {
            return resposta.data
        }).catch( (errors) => {   
            return errors.response;
        })
    )
}



