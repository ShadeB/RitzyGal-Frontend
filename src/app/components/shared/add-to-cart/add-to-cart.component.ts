import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  selectedColor: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  colorInputChangeHandler(value: string) {
    this.selectedColor = value;
  }

}
