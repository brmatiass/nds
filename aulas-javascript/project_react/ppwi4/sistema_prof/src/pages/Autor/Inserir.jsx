import React from 'react'
import { GradeSistema } from '../../Components/Content/Style'
import PageHeaders from '../../Components/Header/PageHeaders'

const Inserir = () => {
    return (
        <div>
          <PageHeaders 
                tituloaPagina="Cadastro de Autores"
                path="/autor/listar"
                tituloPesquisa="Listagem de Autores"
                icon="user-plus"
                toReturn="list"
          /> 
          <GradeSistema>

          </GradeSistema>
        </div>
    )
}

export default Inserir
