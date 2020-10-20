package com.br.study.resources;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.study.entities.Product;

@RestController
@RequestMapping(value = "/product")
public class ProductResource {
	
	@GetMapping
	public ResponseEntity<Product> findAll() {
		Product p1 = new Product(1L, "Test1", 0.0, 0);
		
		return ResponseEntity.ok().body(p1);
		
	}

}
