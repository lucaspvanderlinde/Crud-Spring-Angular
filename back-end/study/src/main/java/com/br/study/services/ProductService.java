package com.br.study.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.study.entities.Product;
import com.br.study.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	public List<Product> findAll() {
		return productRepository.findAll();
	}
	
	public Product findById(Long id) {
		Optional<Product> obj = productRepository.findById(id);
		return obj.get();
	}
	
	public Product insert(Product obj) {
		return productRepository.save(obj);
	}

	public void delete(Long id) {
		productRepository.deleteById(id);
	}
	
	public Product update(Long id, Product obj) {
		Product entity = productRepository.getOne(id);
		update(entity, obj);
		return productRepository.save(entity);
	}

	private void update(Product entity, Product obj) {
		 entity.setName(obj.getName());
		 entity.setPrice(obj.getPrice());
		 entity.setQuantity(obj.getQuantity());
	}
}
