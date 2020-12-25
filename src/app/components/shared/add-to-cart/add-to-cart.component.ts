import { Component, OnInit } from '@angular/core';
import { type } from 'os';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  quantity: number = 0;
  selectedColor: string = '';
  selectedSize: number;
  colorHexValue: string = '';
  colors = [
    { name: 'red',
      Hex: '#ff0000',
    },
    {
      name: 'blue',
      Hex: '#0000ff',
    },
    {
      name: "black",
      Hex: '#000',
    },

  ];

  sizes = {s: "small", m: "medium", l: "large"}

  constructor() { }

  ngOnInit(): void {
  }

  colorInputChangeHandler(value: string, index: any) {
    this.selectedColor = value;
    this.colorHexValue = this.colors[index]["Hex"];
    document.documentElement.style.setProperty('--bg-color-picked', this.colorHexValue)
  }

  sizeInputChangeHandler(size: number) {
    this.selectedSize = size;
  }

  public keepObjectOrder = (index: { key: any; }) => index.key

  getQuantityValue(value: number) {
    this.quantity = value;
  }

  addToCart(event: Event) {
    event.preventDefault();
    console.log({color: this.selectedColor, size: this.selectedSize, quantity: this.quantity});
  }
}
