package com.sistema.models.service.faces;

import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.sistema.models.domain.Produto;

public interface ProdutoService {
	
	List <Produto> findAll ();
	Produto save (Produto produto);
	Produto update (Produto produto);
	void deleteById (Long id);
	Optional <Produto> findById (Long id);
	Page<Produto> findAll(Pageable pageable);
	Page<Produto> findProdutoByName(String nome, Pageable pageable);	
}
