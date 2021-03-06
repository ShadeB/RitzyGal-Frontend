import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  @Input() products: [any];
  @Input() loading: boolean;
  @Input() errors: any;

  constructor() { };

  ngOnInit(): void {
  };

}
