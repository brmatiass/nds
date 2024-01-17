import { useState, useEffect} from "react";
import { INIT_FORNECEDOR, validateFornecedor } from './Fornecedor';

export const useFormFornecedor = (fornecedhor) => {
    
    const [fornecedor, setFornecedor] = useState(fornecedhor);
    const [errorClient, setErrorClient] = useState({});
    const [submitting, setSubmitting] = useState(false);
    
    useEffect(()=>{
        setFornecedor(fornecedor)
    },[fornecedor])

    const onChangeFornecedor = ( e ) => {
        const { name, value } = e.target;
        setFornecedor({ ...fornecedor, [name]:value})
    }

    const onFornecedorSubmit = (e) =>{
        e.preventDefault();
        setErrorClient(validateFornecedor(fornecedor))
    }

    const onClearFornecedor =() => {
        setFornecedor(INIT_FORNECEDOR);
    }
  
    useEffect(()=>{
        if (Object.keys(errorClient).length === 0){
            setSubmitting(true);
        }
    }, [errorClient])

    return {
        onChangeFornecedor,
        onFornecedorSubmit,
        onClearFornecedor,
        submitting,
        fornecedor,
        errorClient,
    };
}