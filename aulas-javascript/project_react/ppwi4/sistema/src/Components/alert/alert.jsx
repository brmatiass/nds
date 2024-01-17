import React, { Fragment, useState }  from 'react';
import Check from '../../Assets/img/check.png';
import Error from '../../Assets/img/error.png';
import Info from '../../Assets/img/info.png';
import Warning from '../../Assets/img/warning.png';

const Alert = (props) => {

    const {show, mensagem, setShow, tipo} = props;

    const [showAlert, setShowAlert] = useState(false);

    let icone = undefined;

    const onCloseAlert = () => {
        setShowAlert (!showAlert);
        setShow()
    }

    if (tipo === 'success'){
        icone = Check;
    }
    else if (tipo === 'danger'){
        icone = Error;
    }
    else if(tipo === 'info'){
        icone = Info;
    }
    else if(tipo === 'warning'){
        icone = Warning;
    }

  return (
    <Fragment>
        {
            show && showAlert && (
                <div className={`alert alert-${tipo} alert-dismissible fade show role = 'alert`}>
                    <img src={icone} className='show-image'/> 
                    <span><strong className='show-message'>{mensagem}</strong></span>
                    <span className='closebtn' onClick={() => onCloseAlert}>X</span>
                </div>
            )
        }
    </Fragment>
  )
}

export default Alert;