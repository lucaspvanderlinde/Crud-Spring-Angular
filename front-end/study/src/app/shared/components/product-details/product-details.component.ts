import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from '../../models/product/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public id: number;
  public product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

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

  public list() {
    this.router.navigate(['/products']);
  }

}
