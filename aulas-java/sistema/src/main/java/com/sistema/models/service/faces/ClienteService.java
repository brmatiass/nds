package com.sistema.models.service.faces;

import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;
import com.sistema.models.domain.Cliente;

public interface ClienteService {
	
	List <Cliente> findAll ();
	Cliente save (Cliente cliente);
	Cliente update (Cliente cliente);
	public void deleteById (Long id);
	Optional <Cliente> findById (Long id);
	Page<Cliente> findAll(Pageable pageable);
	Page<Cliente> findClienteByName(String nome, Pageable pageable);
	
}