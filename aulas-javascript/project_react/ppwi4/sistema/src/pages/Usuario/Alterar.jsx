import React, { Fragment, useEffect, useState } from 'react';
import { GradeSistema } from '../../Components/Content/Style';
import { DEFAULT_IMAGEM, SERVIDOR_POST_IMAGEM } from '../../Config/Config';
import { INIT_USUARIO } from './Usuario';
import { postFotoUsuario, deleteFotoUsuario, createUsuario, findUsuarioById } from '../../Service/UsuarioService';
import * as FaIcons from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const Alterar = () => {
     
    const { id } = useParams();

    const [foto, setFoto] = useState('');
    const [imagem, setImagem] = useState('');
    const [contentType, setContentType] = useState('');
    const [usuario, setUsuario] = useState(INIT_USUARIO);
    
    useEffect(()=>{
        async function loadUsuario(){
            const data = await findUsuarioById(id);
            setUsuario(data)
            setImagem(data.foto);
            setContentType(data.contentType);
            setFoto(data.foto);
         }
       loadUsuario(); 
    },[id])

    
    const selectFile = async (e) =>{
        e.preventDefault();
        if (e.target.files && e.target.files[0]){
            let fileName  = e.target.files[0]
            const reader = new FileReader();
            reader.onload = (e) => {
              setImagem(e.target.result)
            }
            reader.readAsDataURL(fileName);
            let formData = new FormData();
            formData.append("id", document.getElementById("id").value);
            formData.append("foto",fileName);
            const data_foto = await postFotoUsuario(formData);
            setImagem(data_foto.nomeArquivo);
            setContentType(data_foto.contentType);
            setFoto(data_foto.nomeArquivo);

        }

    }

    const excluirFoto = async (e) => {
        e.preventDefault();  
        let fotoCadastrada = {
            'id':document.getElementById("id").value,
            'foto':foto,
        }
        const data_foto = await deleteFotoUsuario(fotoCadastrada);
        setImagem('');
        setContentType('');
        setFoto('');
        document.getElementById('fileInput').value = '';
    }
    
    const onChangeUsuario = ( e ) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]:value})
    } 

    const onSubmitUsuario = async (e) => {
         e.preventDefault();
         usuario.foto = foto;
         usuario.contentType = contentType;
         const data = await createUsuario(usuario);
         setImagem('');
         setContentType('');
         setFoto('');
         document.getElementById('fileInput').value = '';
    } 

    return (
        <Fragment>
            <GradeSistema>
                <div className='container'>
                   <form id="form" onSubmit={(e)=>onSubmitUsuario(e)}>
                    <div className="row">
                        <div className='col-sm-4'>
                            <div className='row'>
                                <div className='col-xs-12 col-sm-12 col-md-12'>
                                    <div className='form-group>'>
                                      <div id="drop-zone">
                                          <input type="hidden" 
                                                 id="imagem" 
                                                 name="imagem" 
                                                 value={imagem}/>
                                          <input type="hidden" 
                                                 id="contentType" 
                                                 name="contentType" 
                                                 value={contentType}/>
                                          <div id="fotoDisco">
                                              <img src={ foto === '' ? 
                                                         DEFAULT_IMAGEM : 
                                                         `${SERVIDOR_POST_IMAGEM}${foto}`}
                                                         className="avatar"
                                                         id="imagemUpload"
                                                         name="upload"/>
                                          </div>
                                          <div id="clickHereLeft">
                                               <input type="file"
                                                      accept='.jpg, .jpeg, .png'
                                                      id="fileInput"
                                                      className='form-control hide btn-responsive'  
                                                      onChange={(e)=>selectFile(e)}
                                                    /> 
                                                <div style={{ textAlign:"center" }}>
                                                    l;<label htmlFor="fileInput">
                                                        <i className='fa fa-upload fa-lg' aria-hidden="true"></i>
                                                    </label>
                                                </div>    
                                          </div>
                                          <div id="clickHereRight">
                                              <input type="button"
                                                     id="fileExcluir"
                                                     className='form-control hide btn-responsive'
                                                     onClick={(e)=>excluirFoto(e)}/>
                                              <div style={{ textAlign:"center" }}>
                                                    <label htmlFor="fileExcluir">
                                                        <i className='fa fa-trash fa-lg'></i>
                                                    </label>
                                              </div>       
                                          </div>
                                      </div> 
                                      </div>  
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-8'>
                            <div className='row mt-4'>
                                <div className='col-xs-12 col-sm-12 col-md-12'>
                                     <div className='form-group'>
                                         <label className='control-label fontSize'>Nome:</label>
                                         <div className='input-container'>
                                            <i className='icon-input' ><FaIcons.FaUserAlt/></i> 
                                            <input type='text'
                                                    name="username"
                                                    id="username"
                                                    className='form-control'
                                                    value={usuario.username}
                                                    onChange={(e)=> onChangeUsuario(e)}/>
                                         </div>       

                                     </div>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-xs-12 col-sm-12 col-md-12'>
                                     <div className='form-group'>
                                         <label className='control-label fontSize'>E-mail:</label>
                                         <div className='input-container'>
                                            <i className='icon-input' ><FaIcons.FaEnvelope/></i>
                                            <input type='text'
                                                    name="email"
                                                    id="email"
                                                    className='form-control'
                                                    value={usuario.email}
                                                    onChange={(e)=> onChangeUsuario(e)}/>
                                          </div>  
                                     </div>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-xs-12 col-sm-12 col-md-12'>
                                     <div className='form-group'>
                                         <label className='control-label fontSize'>Senha:</label>
                                         <div className='input-container'>
                                            <i className='icon-input' ><FaIcons.FaLock/></i>
                                            <input type='password'
                                                name="password"
                                                id="password"
                                                className='form-control'
                                                value={usuario.password}
                                                onChange={(e)=> onChangeUsuario(e)}/>
                                         </div>   
                                     </div>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-xs-12 col-sm-12 col-md-12'>
                                     <div className='form-group'>
                                         <label className='control-label fontSize'>Confirmar Senha:</label>
                                         <div className='input-container'>
                                            <i className='icon-input' ><FaIcons.FaLock/></i>
                                            <input type='password'
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                className='form-control'
                                                value={usuario.confirmPassword}
                                                onChange={(e)=> onChangeUsuario(e)}/>
                                            </div>
                                     </div>
                                </div>
                            </div>
                            <input type="hidden" id="id" value={id}/>
                            <div className='row mt-4'>
                                <div className='col-xs-12 col-sm-6 form-group'>
                                    <button className='btn btn-success btn-lg form-control'
                                            >
                                        Salvar
                                    </button> 
                                </div>
                                <div className='cl-xs-12 col-sm-6 form-group'>
                                    <a type="button" className='btn btn-secondary btn-lg form-control'>
                                       Cancelar
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                  </form>
                  
                </div>
             
          
            </GradeSistema>
        </Fragment>
    )

}

export default Alterar;