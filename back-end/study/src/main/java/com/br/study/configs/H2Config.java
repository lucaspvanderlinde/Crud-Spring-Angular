package com.br.study.configs;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.br.study.entities.Product;
import com.br.study.repositories.ProductRepository;

@Configuration
@Profile("h2")
public class H2Config implements CommandLineRunner {

	@Autowired
	private ProductRepository productRepository;

	@Override
	public void run(String... args) throws Exception {

		Product p1 = new Product(1, "Produto 1", 0.0, 10);
		Product p2 = new Product(2, "Produto 2", 0.0, 10);

		productRepository.saveAll(Arrays.asList(p1, p2));

	}

}
