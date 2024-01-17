
import banco from "../Config/Banco";

export const findAllRoles = async ( paginaAtual, tamanhoPagina, atributo, dir ) => {
    return (
        banco({
            method:'GET',
            url:'/role/listar',
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


export const findRolesByName = async ( nome, paginaAtual, tamanhoPagina, atributo, dir ) => {
    return (
        banco({
            method:'GET',
            url:`/role/listar/${nome}`,
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

export const findRolesById = async ( id ) => {
    return (
        banco({
             method:'get',  
             url:`/role/buscar/${id}`,
        }).then( (resposta) => {
            return resposta.data
        }).catch( (errors) => {   
            return errors.response;
        })
    )
}

export const createRoles = async ( role ) => {
    return (
        banco({
            method:'post',
            url:'/role/inserir',
            data:role
        }).then ((resposta)=>{
            return resposta.data
        }).catch((errors)=>{
            return errors.response;
        })
    )
}

export const updateRoles = async ( role ) => {
    return (
        banco({
            method:'post',
            url:'/role/alterar',
            data:role
        }).then ((resposta)=>{
            return resposta.data
        }).catch((errors)=>{
            return errors.response;
        })
    )
}

export const deleteRolesById = async ( id ) => {
    return (
        banco({
             method:'delete',  
             url:`/role/delete/${id}`,
        }).then( (resposta) => {
            return resposta.data
        }).catch( (errors) => {   
            return errors.response;
        })
    )
}