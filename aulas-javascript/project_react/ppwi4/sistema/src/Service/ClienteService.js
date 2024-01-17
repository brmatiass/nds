import banco from "../Config/Banco";

export const findAllCliente = async ( paginaAtual, tamanhoPagina, atributo, dir ) => {
    return(
        banco({
            method:'GET',
            url:'/cliente/listar',
            params:{
                paginaAtual,
                tamanhoPagina,
                atributo,
                dir
            },
        }).then( (resposta) =>{
            return resposta.data
        }).catch(( errors) => {
            return errors.response
        })
    )

}

export const findClienteByName = async ( nome, paginaAtual, tamanhoPagina, atributo, dir ) => {
    return (
        banco({
            method:'GET',
            url:`/cliente/listar/${nome}`,
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

export const findClienteById = async ( id ) => {
    return (
        banco({
             method:'get',  
             url:`/cliente/buscar/${id}`,
        }).then( (resposta) => {
            return resposta.data
        }).catch( (errors) => {   
            return errors.response;
        })
    )
}

export const createCliente = async ( cliente ) => {
    return (
        banco({
            method:'post',
            url:'/cliente/inserir',
            data:cliente
        }).then ((resposta)=>{
            return resposta.data
        }).catch((errors)=>{
            return errors.response;
        })
    )
}

export const updateCliente = async ( cliente ) => {
    return (
        banco({
            method:'post',
            url:'/cliente/alterar',
            data:cliente
        }).then ((resposta)=>{
            return resposta.data
        }).catch((errors)=>{
            return errors.response;
        })
    )
}

export const deleteClienteById = async ( id ) => {
    return (
        banco({
             method:'delete',  
             url:`/cliente/delete/${id}`,
        }).then( (resposta) => {
            return resposta.data
        }).catch( (errors) => {   
            return errors.response;
        })
    )
}