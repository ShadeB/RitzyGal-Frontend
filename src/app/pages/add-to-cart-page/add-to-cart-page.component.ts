import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Product} from 'src/app/Interfaces/product';

@Component({
  selector: 'app-add-to-cart-page',
  templateUrl: './add-to-cart-page.component.html',
  styleUrls: ['./add-to-cart-page.component.scss']
})
export class AddToCartPageComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.product = this.route.snapshot.data.resolvedProduct;
  }

}
