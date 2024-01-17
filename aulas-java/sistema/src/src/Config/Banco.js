
import axios from 'axios';
import { getToken } from './Token';
import { SERVIDOR } from './Config';



const banco = axios.create({
    baseURL: SERVIDOR,
    headers : {
        'Content-type':'application/json',
    },
})


export default banco;