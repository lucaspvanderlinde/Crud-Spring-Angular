import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/shared/models/product/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Observable<Product[]>;

  constructor(private productService: ProductService, private router: Router) { }
  
  ngOnInit(): void {
    this.reloadData();
  }

  private reloadData(){
    this.productService.getProducts()
      .subscribe(data => {
         this.products = data;
      });
  }

}
