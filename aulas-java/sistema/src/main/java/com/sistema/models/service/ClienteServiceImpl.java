package com.sistema.models.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sistema.models.domain.Cliente;
import com.sistema.models.repository.ClienteRepository;
import com.sistema.models.repository.ClienteRepository;
import com.sistema.models.service.faces.ClienteService;

@Service
@Transactional
public class ClienteServiceImpl implements ClienteService {
    
	@Autowired
	private ClienteRepository clienteRepository;
		
	@Override
	public Cliente save(Cliente cliente) {      
		return clienteRepository.saveAndFlush(cliente);
	}

	@Override
	public Cliente update(Cliente cliente) {
		return save(cliente);
	}

	@Override
	public void deleteById(Long id) {    
		clienteRepository.deleteById(id);
	}

	@Transactional(readOnly = true)
	@Override
	public Optional<Cliente> findById(Long id) {
		return clienteRepository.findById(id);
	}

	@Override
	public List<Cliente> findAll() {
		return clienteRepository.findAll();
	}

	@Override
	public Page<Cliente> findAll(Pageable pageable) {
		return clienteRepository.findAll(pageable);
	}

	@Override
	public Page<Cliente> findClienteByName(String nome, Pageable pageable) {
		return clienteRepository.findClienteByName(nome, pageable);
	}

}