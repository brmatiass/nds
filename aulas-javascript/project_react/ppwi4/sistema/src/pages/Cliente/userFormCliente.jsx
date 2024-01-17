import { useState, useEffect} from "react";
import { INIT_CLIENTE, validateCliente } from './Cliente';

export const useFormCliente = (clienthe) => {
    
    const [cliente, setCliente] = useState(clienthe);
    const [errorClient, setErrorClient] = useState({});
    const [submitting, setSubmitting] = useState(false);
    
    useEffect(()=>{
        setCliente(cliente)
    },[cliente])

    const onChangeCliente = ( e ) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]:value})
    }

    const onClienteSubmit = (e) =>{
        e.preventDefault();
        setErrorClient(validateCliente(cliente))
    }

    const onClearCliente =() => {
        setCliente(INIT_CLIENTE);
    }
  
    useEffect(()=>{
        if (Object.keys(errorClient).length === 0){
            setSubmitting(true);
        }
    }, [errorClient])

    return {
        onChangeCliente,
        onClienteSubmit,
        onClearCliente,
        submitting,
        cliente,
        errorClient,
    };
}