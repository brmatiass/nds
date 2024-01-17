
import axios from 'axios';
import { SERVIDOR } from './Config';

const banco = axios.create({
    baseURL: SERVIDOR
})


export default banco;