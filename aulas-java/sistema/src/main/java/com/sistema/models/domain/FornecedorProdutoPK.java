package com.sistema.models.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class FornecedorProdutoPK implements Serializable {

	private static final long serialVersionUID = 527897366719783447L;

	private Long idFornecedor;
	private Long idProduto;
	
	
	public FornecedorProdutoPK() {
	}


	public FornecedorProdutoPK(Long idFornecedor, Long idProduto) {
		this.idFornecedor = idFornecedor;
		this.idProduto = idProduto;
	}


	@Column(name="ID_FORNECEDOR", insertable = false, updatable = false, nullable = false)
	public Long getIdFornecedor() {
		return idFornecedor;
	}


	public void setIdFornecedor(Long idFornecedor) {
		this.idFornecedor = idFornecedor;
	}

	@Column(name="ID_PRODUTO", insertable = false, updatable = false, nullable = false)
	public Long getIdProduto() {
		return idProduto;
	}


	public void setIdProduto(Long idProduto) {
		this.idProduto = idProduto;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((idFornecedor == null) ? 0 : idFornecedor.hashCode());
		result = prime * result + ((idProduto == null) ? 0 : idProduto.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		FornecedorProdutoPK other = (FornecedorProdutoPK) obj;
		if (idFornecedor == null) {
			if (other.idFornecedor != null)
				return false;
		} else if (!idFornecedor.equals(other.idFornecedor))
			return false;
		if (idProduto == null) {
			if (other.idProduto != null)
				return false;
		} else if (!idProduto.equals(other.idProduto))
			return false;
		return true;
	}
}