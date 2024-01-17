package com.sistema.models.domain;

import java.lang.invoke.MethodHandles.Lookup;
import java.util.List;
import java.util.Optional;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "TAB_PRODUTO")
public class Produto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String nome;
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "FORNECEDOR_PRODUTO",
		joinColumns = @JoinColumn (name = "PRODUTO_ID"),
		inverseJoinColumns = {@JoinColumn (name = "FORNECEDOR_ID")})
	private String categoria;
	private String estoque;
	private String preco;
	
	private List<Fornecedor> fornecedores;
	
	public Produto() {
		
	}

	public Produto(Long id, String nome, String categoria, String estoque, String preco,
			List<Fornecedor> fornecedores) {
		super();
		this.id = id;
		this.nome = nome;
		this.categoria = categoria;
		this.estoque = estoque;
		this.preco = preco;
		this.fornecedores = fornecedores;
	}

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name = "ID_PRODUTO")
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Column(name = "NOME_PRODUTO", length = 20, nullable = false)
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Column(name = "CATEGORIA_PRODUTO", length = 10, nullable = false)
	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	@Column(name = "ESTOQUE_PRODUTO", length = 10, nullable = false)
	public String getEstoque() {
		return estoque;
	}

	public void setEstoque(String estoque) {
		this.estoque = estoque;
	}

	@Column(name = "PRECO_PRODUTO", length = 10, nullable = false)
	public String getPreco() {
		return preco;
	}

	public void setPreco(String preco) {
		this.preco = preco;
	}

	@ManyToMany(mappedBy="produtos")
	public List<Fornecedor> getFornecedores() {
		return fornecedores;
	}

	public void setFornecedores(List<Fornecedor> fornecedores) {
		this.fornecedores = fornecedores;
	}

	@Override
	public String toString() {
		return "Produto [id=" + id + ", nome=" + nome + ", categoria=" + categoria + ", estoque=" + estoque + ", preco="
				+ preco + ", fornecedores=" + fornecedores + "]";
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
