package com.sistema.models.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sistema.models.domain.Contato;
import com.sistema.models.repository.ContatoRepository;
import com.sistema.models.service.faces.ContatoService;

@Service
@Transactional (readOnly = true)
public class ContatoServiceImpl implements ContatoService {

	@Autowired
	private ContatoRepository contatoRepository;
	
	@Override
	public Contato save(Contato contato) {
		return contatoRepository.save(contato);
	}

	@Override
	public void update(Contato contato) {
		save (contato);
	}

	@Override
	public void deleteById(Long id) {
		contatoRepository.deleteById(id);
	}

	@Override
	@Transactional (readOnly = true)
	public Optional<Contato> findById(Long id) {
		return contatoRepository.findById(id);
	}

	@Override
	public List<Contato> findAll() {
		return contatoRepository.findAll();
	}

}
