package com.sistema.models.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.sistema.models.domain.Produto;
import com.sistema.models.repository.ProdutoRepository;
import com.sistema.models.service.faces.ProdutoService;

@Service
@Transactional (readOnly = true)
public class ProdutoServiceImpl implements ProdutoService {

	@Autowired
	private ProdutoRepository produtoRepository;
		
	@Override
	public Produto save(Produto produto) {      
		return produtoRepository.saveAndFlush(produto);
	}

	@Override
	public Produto update(Produto produto) {
		return save(produto);
	}

	@Override
	public void deleteById(Long id) {    
		produtoRepository.deleteById(id);
	}

	@Transactional(readOnly = true)
	@Override
	public Optional<Produto> findById(Long id) {
		return produtoRepository.findById(id);
	}

	@Override
	public List<Produto> findAll() {
		return produtoRepository.findAll();
	}

	@Override
	public Page<Produto> findAll(Pageable pageable) {
		return produtoRepository.findAll(pageable);
	}

	@Override
	public Page<Produto> findProdutoByName(String nome, Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

}