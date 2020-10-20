package com.br.study.resources;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/products")
public class ProductResource {

	/*
	 * @GetMapping // public ResponseEntity<Product> findAll() { // Product p1 = new
	 * Product(1L, "Test1", 0.0, 0); // return ResponseEntity.ok().body(p1); // }
	 */
}
