import { Component, OnInit } from '@angular/core';

import { Product } from '../../Interfaces/product';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  products: Product[];
  loading: boolean = true;
  errors: {};

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(
        (result) => {
          if (!result.data) {
            this.errors = {...result};
            this.loading = false;
          } else {
            this.products = result.data.listAllProducts;
            this.loading = result.loading
          }
      });
  }

}
