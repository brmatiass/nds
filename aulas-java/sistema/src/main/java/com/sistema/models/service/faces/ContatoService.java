package com.sistema.models.service.faces;

import java.util.List;
import java.util.Optional;

import com.sistema.models.domain.Contato;

public interface ContatoService {

	Contato save (Contato contato);
	void update (Contato contato);
	void deleteById (Long id);
	Optional <Contato> findById (Long id);
	List <Contato> findAll ();
	
}
