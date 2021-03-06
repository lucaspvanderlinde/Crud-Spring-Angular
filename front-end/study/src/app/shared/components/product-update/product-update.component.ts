import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from '../../models/product/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  public id: number;
  public product: Product;

  constructor(private route: ActivatedRoute, private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];

    this.productService.getProductById(this.id)
      .subscribe(data => {
        console.log(data);
        this.product = data;
      },
        error => console.log(error)
      );
  }

  private updateProduct() {
    this.productService.updateProduct(this.id, this.product)
      .subscribe(data => {
        console.log(data);
        this.product = new Product();
        this.gotoList();
      },
        error => console.log(error)
      );
  }

  public onSubmit() {
    this.updateProduct();
  }

  private gotoList() {
    this.router.navigate(['/products']);
  }

}
