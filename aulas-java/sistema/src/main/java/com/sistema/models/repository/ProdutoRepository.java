package com.sistema.models.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;


import com.sistema.models.domain.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository <Produto, Long>{

	@Query("SELECT l FROM Produto l WHERE l.nome LIKE( CONCAT('%',:nome,'%'))")
	Page<Produto> findProdutoByName(String nome, Pageable pageable);
}
