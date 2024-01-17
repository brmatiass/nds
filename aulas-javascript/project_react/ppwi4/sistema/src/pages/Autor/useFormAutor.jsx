import { useState, useEffect} from "react";
import { INIT_AUTOR, validateAutor } from './Autor';

export const useFormAutor = (author) => {
    
    const [autor, setAutor] = useState(author);
    const [errorClient, setErrorClient] = useState({});
    const [submitting, setSubmitting] = useState(false);
    
    useEffect(()=>{
        setAutor(autor)
    },[autor])

    const onChangeAutor = ( e ) => {
        const { name, value } = e.target;
        setAutor({ ...autor, [name]:value})
    }

    const onAutorSubmit = (e) =>{
        e.preventDefault();
        setErrorClient(validateAutor(autor))
    }

    const onClearAutor =() => {
        setAutor(INIT_AUTOR);
    }
  
    useEffect(()=>{
        if (Object.keys(errorClient).length === 0){
            setSubmitting(true);
        }
    }, [errorClient])

    return {
        onChangeAutor,
        onAutorSubmit,
        onClearAutor,
        submitting,
        autor,
        errorClient,
    };
}