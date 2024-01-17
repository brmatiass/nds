package com.sistema.models.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sistema.models.domain.Fornecedor;
import com.sistema.models.repository.FornecedorRepository;
import com.sistema.models.service.faces.FornecedorService;

@Service
@Transactional
public class FornecedorServiceImpl implements FornecedorService {
    
	@Autowired
	private FornecedorRepository fornecedorRepository;
		
	@Override
	public Fornecedor save(Fornecedor fornecedor) {      
		return fornecedorRepository.saveAndFlush(fornecedor);
	}

	@Override
	public Fornecedor update(Fornecedor fornecedor) {
		return fornecedorRepository.save(fornecedor);
	}

	@Override
	public void deleteById(Long id) {    
		fornecedorRepository.deleteById(id);
	}

	@Transactional(readOnly = true)
	@Override
	public Optional<Fornecedor> findById(Long id) {
		return fornecedorRepository.findById(id);
	}

	@Override
	public List<Fornecedor> findAll() {
		return fornecedorRepository.findAll();
	}

	@Override
	public Page<Fornecedor> findAll(Pageable pageable) {
		return fornecedorRepository.findAll(pageable);
	}

	@Override
	public Page<Fornecedor> findFornecedorByName(String snome, Pageable pageable) {
		return fornecedorRepository.findFornecedorByName(snome, pageable);
	}

}