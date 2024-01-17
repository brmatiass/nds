package com.sistema.models.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistema.models.domain.Contato;

@Repository
public interface ContatoRepository extends JpaRepository <Contato, Long> {

}
