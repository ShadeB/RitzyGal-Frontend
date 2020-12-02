import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  selectedColor: string = '';
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

  constructor() { }

  ngOnInit(): void {
  }

  colorInputChangeHandler(value: string, index: any) {
    this.selectedColor = value;
    this.colorHexValue = this.colors[index]["Hex"];
    document.documentElement.style.setProperty('--bg-color-picked', this.colorHexValue)
  }
}
