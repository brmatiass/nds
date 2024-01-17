package com.sistema.models.domain;

import java.util.List;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "TAB_CLIENTE")

public class Cliente {

	private Long id;
	private String nome;
	private String email;
	private String endereco;
	private String bairro;
	private String cidade;
	private String estado;
	private String pais;
	
	private List<Contato> contatos;
	private List<Fornecedor> fornecedores;
	
	public Cliente() {
		
	}
	
	public Cliente(Long id, String nome, String email, String endereco, String bairro, String cidade, String estado,
			String pais, List<Contato> contatos, List<Fornecedor> fornecedores) {
		super();
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.endereco = endereco;
		this.bairro = bairro;
		this.cidade = cidade;
		this.estado = estado;
		this.pais = pais;
		this.contatos = contatos;
		this.fornecedores = fornecedores;
	}

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name = "ID_CLIENTE")	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Column(name = "NOME_CLIENTE", length = 80, nullable = false)
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Column(name = "EMAIL_CLIENTE", length = 80, nullable = false)
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	@Column(name = "ENDERECO_CLIENTE", length = 80, nullable = false)

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	
	@Column(name = "BAIRRO_CLIENTE", length = 30, nullable = false)

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	
	@Column(name = "CIDADE_CLIENTE", length = 30, nullable = false)

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	
	@Column(name = "ESTADO_CLIENTE", length = 30, nullable = false)

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
	
	@Column(name = "PAIS_CLIENTE", length = 20, nullable = false)

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}
	
	@JsonIgnore
	@OneToMany(mappedBy = "cliente")
	public List<Contato> getContatos() {
		return contatos;
	}

	public void setContatos(List<Contato> contatos) {
		this.contatos = contatos;
	}

	@ManyToMany
	@JoinTable(name="TAB_FORNECEDOR_CLIENTE", 
				joinColumns = @JoinColumn(name = "ID_CLIENTE"),
				inverseJoinColumns = @JoinColumn(name = "ID_FORNECEDOR"))	
	public List<Fornecedor> getFornecedores() {
		return fornecedores;
	}

	public void setFornecedores(List<Fornecedor> fornecedores) {
		this.fornecedores = fornecedores;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cliente other = (Cliente) obj;
		return Objects.equals(id, other.id);
	}

	@Override
	public String toString() {
		return "Cliente [id=" + id + ", nome=" + nome + ", email=" + email + ", endereco=" + endereco + ", bairro="
				+ bairro + ", cidade=" + cidade + ", estado=" + estado + ", pais=" + pais + "]";
	}
	
		
}