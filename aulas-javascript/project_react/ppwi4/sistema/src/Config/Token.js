

export const setUsuario = ( data ) => {

    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.username);
    localStorage.setItem('email',data.email);
    localStorage.setItem('logged',true);

}

export const getToken = () => {
    return localStorage.getItem('token');
}

export const getUsername = () => {
     return localStorage.getItem('username');
}

export const getEmail = () => {
    return localStorage.getItem('email');
}

export const getLogged = () =>{
    return localStorage.getItem('logged');
}

export const logout = () => {
    localStorage.clear();
    localStorage.setItem('logged',false);
}