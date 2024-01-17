package com.sistema.models.domain;

import java.lang.invoke.MethodHandles.Lookup;
import java.util.Optional;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "TAB_CONTATO")

public class Contato {
	
	private Long id;
	private String telefone;
	
	private Cliente cliente;
	private Fornecedor fornecedor;
	
	public Contato() {
		
	}

	public Contato(Long id, String telefone, Cliente cliente, Fornecedor fornecedor) {
		super();
		this.id = id;
		this.telefone = telefone;
		this.cliente = cliente;
		this.fornecedor = fornecedor;
	}

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name = "ID_CONTATO")
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Column(name = "TELEFONE_CONTATO", length = 17, nullable = false)
	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	
	@ManyToOne
	@JoinColumn(name="ID_CLIENTE")
	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	@ManyToOne
	@JoinColumn(name="ID_FORNECEDOR")
	public Fornecedor getFornecedor() {
		return fornecedor;
	}

	public void setFornecedor(Fornecedor fornecedor) {
		this.fornecedor = fornecedor;
	}

	@Override
	public String toString() {
		return "Contato [id=" + id + ", telefone=" + telefone + "]";
	}

	public byte byteValue() {
		return id.byteValue();
	}

	public short shortValue() {
		return id.shortValue();
	}

	public int intValue() {
		return id.intValue();
	}

	public long longValue() {
		return id.longValue();
	}

	public float floatValue() {
		return id.floatValue();
	}

	public double doubleValue() {
		return id.doubleValue();
	}

	public int hashCode() {
		return id.hashCode();
	}

	public boolean equals(Object obj) {
		return id.equals(obj);
	}

	public int compareTo(Long anotherLong) {
		return id.compareTo(anotherLong);
	}

	public Optional<Long> describeConstable() {
		return id.describeConstable();
	}

	public Long resolveConstantDesc(Lookup lookup) {
		return id.resolveConstantDesc(lookup);
	}
	
	
	
}
