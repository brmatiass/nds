
import banco from "../Config/Banco";


export const loginSistema = async ( user ) => {
    return (
       banco({
             method:'post',  
             url:'/login',
             data:user,
        }).then( (resposta) => {
            return resposta.data
        }).catch( (errors) => {   
            return errors.response;
        }) 
    )
}




