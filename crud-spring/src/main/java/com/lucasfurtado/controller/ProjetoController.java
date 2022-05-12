package com.lucasfurtado.controller;
import java.util.List;

import com.lucasfurtado.model.Projeto;
import com.lucasfurtado.repository.ProjetoRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/projetos")
@AllArgsConstructor
public class ProjetoController {
  
    private final ProjetoRepository projetoRepository;
    
    //@RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public List<Projeto> list() {
        return projetoRepository.findAll();
    }
}
