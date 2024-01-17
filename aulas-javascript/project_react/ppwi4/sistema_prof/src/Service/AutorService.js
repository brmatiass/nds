
import banco from "../Config/Banco";

export const findAllAutor = async ( paginaAtual, tamanhoPagina ) => {
    return (
        banco({
            method:'GET',
            url:'/autor/listar',
            params:{
              paginaAtual,
              tamanhoPagina,
            },
        }).then( (resposta) => {
            return resposta.data
        }).catch( ( errors ) => {
            return errors.response
        })
    )
}