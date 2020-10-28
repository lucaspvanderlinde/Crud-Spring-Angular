import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from '../../models/product/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  public product: Product = new Product();
  public submitted = false;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  public save() {
    this.productService.insertProduct(this.product)
      .subscribe(data => {
        console.log(data)
        this.product = new Product();
        this.gotoList();
      },
        error => console.log(error)
      );
  }

  public onSubmit() {
    this.submitted = true;
    this.save();
  };

  private gotoList() {
    this.router.navigate(['/products']);
  }
}
