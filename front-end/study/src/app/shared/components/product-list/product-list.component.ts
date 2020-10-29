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

  public deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  public updateProduct(id: number){
    this.router.navigate(['update', id]);
  }

  public productDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
