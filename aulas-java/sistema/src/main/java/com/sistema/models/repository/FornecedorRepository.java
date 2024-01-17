package com.sistema.models.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.sistema.models.domain.Fornecedor;

@Repository
public interface FornecedorRepository extends JpaRepository <Fornecedor, Long> {
	
	@Query("SELECT a FROM Fornecedor a WHERE a.snome LIKE( CONCAT('%',:snome,'%'))")
	Page<Fornecedor> findFornecedorByName(@Param("snome") String snome, Pageable pageable);

	

}