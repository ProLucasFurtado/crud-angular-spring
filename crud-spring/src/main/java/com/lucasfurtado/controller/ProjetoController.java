package com.lucasfurtado.controller;
import java.util.List;

import com.lucasfurtado.model.Projeto;
import com.lucasfurtado.repository.ProjetoRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
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

    //@RequestMapping(method = RequestMethod.POST)
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Projeto create(@RequestBody Projeto projeto) {
        
        //System.out.println(projeto.getNome());
        return projetoRepository.save(projeto);
        //return ResponseEntity.status(HttpStatus.CREATED)
        //   .body(projetoRepository.save(projeto));
    }
}
