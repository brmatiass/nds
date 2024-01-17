
import axios from 'axios';
import { getToken } from './Token';
import { SERVIDOR } from './Config';

const banco = axios.create({
    baseURL: SERVIDOR,
    headers : {
        'Content-type':'application/json',
    },
})


banco.interceptors.request.use( config => {
    const token = getToken();
    if (token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return Promise.resolve(config);
})

export default banco;