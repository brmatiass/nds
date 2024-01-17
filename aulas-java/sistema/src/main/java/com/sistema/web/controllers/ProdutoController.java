package com.sistema.web.controllers;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.sistema.models.domain.Produto;
import com.sistema.models.service.faces.ProdutoService;
import com.sistema.models.service.util.GerarListaPagina;

@RestController
@RequestMapping(value="/produto")
public class ProdutoController {
	
	@Autowired
	private ProdutoService produtoService;
	
	@ResponseBody
	@GetMapping(value="/listar")
	public Page<Produto> findAll(@RequestParam(value="paginaAtual",required=false) Optional<Integer> paginaAtual,
							   @RequestParam(value="tamanhoPagina",required=false) Optional<Integer> tamanhoPagina,
							   @RequestParam(value="atributo",required=false) Optional<String> atributo,
							   @RequestParam(value="dir",required=false) Optional<String> dir ){
		
		 Pageable pageable = GerarListaPagina.gerarPagina(paginaAtual.orElse(0), 
						                 tamanhoPagina.orElse(5), 
						                 dir.orElse("asc"), 
						                 atributo.orElse("id") );
		 
		 Page<Produto> paginaProduto = produtoService.findAll(pageable);
		
		return paginaProduto;
	}
	
	
	@ResponseBody
	@GetMapping(value="/listar/{nome}")
	public Page<Produto> findAutorByName(
			@PathVariable("nome") String nome,
			@RequestParam(value="paginaAtual",required=false) Optional<Integer> paginaAtual,
			@RequestParam(value="tamanhoPagina",required=false) Optional<Integer> tamanhoPagina,
			@RequestParam(value="atributo",required=false) Optional<String> atributo,
			@RequestParam(value="dir",required=false) Optional<String> dir ){
		
		    Pageable pageable = GerarListaPagina.gerarPagina(paginaAtual.orElse(0), 
		    		                        tamanhoPagina.orElse(5), 
		    		                        dir.orElse("asc"), 
		    		                        atributo.orElse("id") );
		    
		    Page<Produto> paginaProduto = produtoService.findProdutoByName(nome, pageable);
		
		return paginaProduto; 
	}
	
	@ResponseBody
	@PostMapping(value="/inserir", consumes = MediaType.APPLICATION_JSON_VALUE,
							       produces = MediaType.APPLICATION_JSON_VALUE)
	public Produto inserir(@RequestBody Produto produto) {
		return produtoService.save(produto);
	}
	
	@ResponseBody
	@GetMapping(value="/buscar/{id}")
	public Optional<Produto> buscar(@PathVariable("id") Long id) {
		return produtoService.findById(id);
	}
	
	@ResponseBody
	@PostMapping(value="/alteracao")
	public Produto update(@RequestBody Produto produto) {
		return produtoService.update(produto);
	}
	
	@ResponseBody
	@DeleteMapping(value="/delete/{id}")
	public void deleteById(@PathVariable("id") Long id) {
		produtoService.deleteById(id);
	}
	
	
}