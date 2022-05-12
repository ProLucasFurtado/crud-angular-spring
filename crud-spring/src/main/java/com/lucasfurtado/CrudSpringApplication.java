package com.lucasfurtado;

import com.lucasfurtado.model.Projeto;
import com.lucasfurtado.repository.ProjetoRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(ProjetoRepository projetoRepository) {
		return args -> {
			projetoRepository.deleteAll();

			Projeto p = new Projeto();
			p.setName("Angular com Spring");
			p.setCategory("front-end");

			projetoRepository.save(p);
		};
	}

}
