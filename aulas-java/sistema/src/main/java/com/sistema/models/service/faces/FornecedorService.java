package com.sistema.models.service.faces;

import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;
import com.sistema.models.domain.Fornecedor;


public interface FornecedorService {
	
	List<Fornecedor> findAll();
	Fornecedor save(Fornecedor fornecedor);
	Fornecedor update(Fornecedor fornecedor);
	void deleteById(Long id);
	Optional<Fornecedor> findById(Long id);
	Page<Fornecedor> findAll(Pageable pageable);
	Page<Fornecedor> findFornecedorByName(String snome, Pageable pageable);

}