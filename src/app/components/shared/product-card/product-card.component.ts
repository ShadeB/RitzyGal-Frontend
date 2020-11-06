import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  stars = [1,2,3,4,5];
  rating = 1;
  hoverState = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
