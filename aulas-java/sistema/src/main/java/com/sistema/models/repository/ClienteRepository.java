package com.sistema.models.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.sistema.models.domain.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>{

	@Query("SELECT a FROM Cliente a WHERE a.nome LIKE( CONCAT('%',:nome,'%'))")
	Page<Cliente> findClienteByName(@Param("nome") String nome, Pageable pageable);

}
