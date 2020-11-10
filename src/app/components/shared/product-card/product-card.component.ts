import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../Interfaces/product';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  stars = [1, 2, 3, 4, 5];
  rating = 1;
  hoverState = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
