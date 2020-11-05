import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {Product} from '../Interfaces/product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  productData: Product;

  constructor(private _productService: ProductService) { };

  ngOnInit(): void {
    this._productService.resolveData().subscribe(response => this.productData = response);
  };

}
