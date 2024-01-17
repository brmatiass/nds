package com.sistema.web.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.sistema.models.domain.Contato;
import com.sistema.models.service.faces.ContatoService;


@RestController
@RequestMapping (value = "/contato")
public class ContatoController {

	@Autowired
	private ContatoService contatoService;
	
	@GetMapping (value= "/listar")
	public List <Contato> findAll(){
		return contatoService.findAll();
	}	
	
	@ResponseBody
	@GetMapping(value= "/buscar/[id]")
	public Optional<Contato> findById(@PathVariable("id") Long id) {
		return contatoService.findById(id);
	}
	
	@ResponseBody
	@DeleteMapping(value= "/delete/{id}")
	public void deleteById(Long id) {
		contatoService.deleteById(id);
	}
}
