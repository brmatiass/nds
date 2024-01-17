import { useState, useEffect} from "react";
import { INIT_PRODUTO, validateProduto } from './Produto';

export const useFormProduto = (clienthe) => {
    
    const [produto, setProduto] = useState(clienthe);
    const [errorClient, setErrorClient] = useState({});
    const [submitting, setSubmitting] = useState(false);
    
    useEffect(()=>{
        setProduto(produto)
    },[produto])

    const onChangeProduto = ( e ) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]:value})
    }

    const onProdutoSubmit = (e) =>{
        e.preventDefault();
        setErrorClient(validateProduto(produto))
    }

    const onClearProduto =() => {
        setProduto(INIT_PRODUTO);
    }
  
    useEffect(()=>{
        if (Object.keys(errorClient).length === 0){
            setSubmitting(true);
        }
    }, [errorClient])

    return {
        onChangeProduto,
        onProdutoSubmit,
        onClearProduto,
        submitting,
        produto,
        errorClient,
    };
}