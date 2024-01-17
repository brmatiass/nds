package com.sistema.web.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.models.domain.Fornecedor;
import com.sistema.models.service.faces.FornecedorService;

@RestController
@RequestMapping(value="/fornecedor")
public class FornecedorController {
	
	@Autowired
	private FornecedorService fornecedorService;
	
	@ResponseBody
	@GetMapping(value="/listar")
	public Page<Fornecedor> findAll(
			@RequestParam(value="paginaAtual",required=false) Optional<Integer> paginaAtual,
			@RequestParam(value="tamanhoPagina",required=false) Optional<Integer> tamanhoPagina,
			@RequestParam(value="atributo",required=false) Optional<String> atributo,
			@RequestParam(value="dir",required=false) Optional<String> dir ){
		
		    Pageable pageable = gerarPagina(paginaAtual.orElse(0), 
		    		                        tamanhoPagina.orElse(5), 
		    		                        dir.orElse("asc"), 
		    		                        atributo.orElse("id") );
		    
		    Page<Fornecedor> paginaFornecedor = fornecedorService.findAll(pageable);
		
		return paginaFornecedor; 
	}
	
	
	@ResponseBody
	@GetMapping(value="/listar/{snome}")
	public Page<Fornecedor> findFornecedorByName(
			@PathVariable("nome") String snome,
			@RequestParam(value="paginaAtual",required=false) Optional<Integer> paginaAtual,
			@RequestParam(value="tamanhoPagina",required=false) Optional<Integer> tamanhoPagina,
			@RequestParam(value="atributo",required=false) Optional<String> atributo,
			@RequestParam(value="dir",required=false) Optional<String> dir ){
		
		    Pageable pageable = gerarPagina(paginaAtual.orElse(0), 
		    		                        tamanhoPagina.orElse(5), 
		    		                        dir.orElse("asc"), 
		    		                        atributo.orElse("id") );
		    
		    Page<Fornecedor> paginaFornecedor = fornecedorService.findFornecedorByName(snome, pageable);
		
		return paginaFornecedor; 
	}
	
	@ResponseBody
	@PostMapping(value="/inserir")
	public Fornecedor inserir(@RequestBody Fornecedor fornecedor) {
	 	return fornecedorService.save(fornecedor);
	}
	
	
	@ResponseBody
	@PostMapping(value="/alterar")
	public Fornecedor update(@RequestBody Fornecedor fornecedor) {
	 	return fornecedorService.update(fornecedor);
	}
	

	@ResponseBody
	@DeleteMapping(value="/delete/{id}")
	public void deleteById(@PathVariable("id") Long id) {
		fornecedorService.deleteById(id);
	}
	
	
	@ResponseBody
	@GetMapping(value="/buscar/{id}")
	public Optional<Fornecedor> findById(@PathVariable("id") Long id) {
		return fornecedorService.findById(id);
		
	}
	
	
	public Pageable gerarPagina(Integer paginaAtual,Integer tamanhoPagina, String dir, String atributo ) {
		return PageRequest.of(paginaAtual, tamanhoPagina, getDirection(dir), atributo);
	}
	
	private Direction getDirection(String dir) {
		return dir.equals("asc") ? Sort.Direction.ASC : Sort.Direction.DESC;
	}
	
	
	
}