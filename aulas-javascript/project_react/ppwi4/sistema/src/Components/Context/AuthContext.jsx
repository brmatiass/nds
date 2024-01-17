import {Children, createContext, useState} from 'react';
import { UsuarioLogado } from './UsuarioLogado';
import { loginSistema} from '../../Service/LoginService';

export const AuthContext = createContext(null);

export const AuthProvider = (Children) => {

    const [usuario, setUsuario] = useState (UsuarioLogado)

    const login = async (user) => {
        let erro = false;
        let mensagem_erro = null;
        let mensagem_title = null;
        const data = await loginSistema(user);
        if ( data.status >= 404 ){
            const mensagem_erro = (data.data.userMessage);
            const mensagem_title = (data.data.title);
            erro = true;
            return {
                mensagem_erro,
                mensagem_title,
                erro,
            }
        }
        usuario.token = data.token;
        usuario.username = data.username;
        usuario.email = data.email;
        usuario.logged = true;
        setUsuario(data)
        return {
            mensagem_erro,
            mensagem_title,
            erro,
        }
    }

    const logout = () => {
        
    }

    return (
        <AuthContext.Provider value={{usuario, login,logout}}>
            {Children}
        </AuthContext.Provider>
    )
}