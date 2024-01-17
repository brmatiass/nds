import React, { useState } from "react";

const pagina = [5,10,15,20];

const SelectNumberPage = ({ tamanhoPagina, changePageSize }) => {
  const [tamanhoDaPagina, setTamanhoDaPagina] = useState(tamanhoPagina);

  const setPagina = (tamanho)=> {
      setTamanhoDaPagina(tamanho);
      changePageSize(tamanho);
  }

  return (
    <div>
        <div className="form-group row">
          <label className="col-form-label col-12 col-md-4 col-sm-1">
            Tamanho Página:
          </label>
          <div className="col-8 col-sm-6 col-md-2 offset-md-1">
            <select
              className="form-control"
              onChange={(e) => setPagina(e.target.value)}
              value={tamanhoDaPagina}
            >
              {pagina.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
     </div>
  );
};

export default SelectNumberPage;