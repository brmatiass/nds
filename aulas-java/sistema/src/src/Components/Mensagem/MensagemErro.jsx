import React, { Fragment } from "react";

const MensagemErro = ({ error, mensagem }) => {
    return (
        <Fragment>
            {
                error && (
                    <div className="invalid-feedback">
                        {
                            mensagem.map((erro, index) => {
                                return (
                                    <p key={index} style={{ margin:"0"}}>
                                        <span>{erro}</span>    
                                    </p>
                                )
                            })
                        }
                    </div>
                )

            }
        </Fragment>
    )

}

export default MensagemErro;