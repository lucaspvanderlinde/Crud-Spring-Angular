package com.br.study.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.br.study.entities.Product;
import com.br.study.repositories.ProductRepository;
import com.br.study.services.exceptions.DatabaseException;
import com.br.study.services.exceptions.ResourceNotFoudException;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	public List<Product> findAll() {
		return productRepository.findAll();
	}

	public Product findById(Long id) {
		Optional<Product> obj = productRepository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoudException(id));
	}

	public Product insert(Product obj) {
		return productRepository.save(obj);
	}

	public void delete(Long id) {
		try {
			productRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoudException(id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException(e.getMessage());
		}
	}

	public Product update(Long id, Product obj) {
		try {
			Product entity = productRepository.getOne(id);
			update(entity, obj);
			return productRepository.save(entity);			
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoudException(id);
		}
	}

	private void update(Product entity, Product obj) {
		entity.setName(obj.getName());
		entity.setPrice(obj.getPrice());
		entity.setQuantity(obj.getQuantity());
	}
}
