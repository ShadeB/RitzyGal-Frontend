import { Component, OnInit } from '@angular/core';
import { type } from 'os';
import {Observable} from 'rxjs';
import {CartService} from 'src/app/services/cart.service';
import {CartWidgetService} from 'src/app/services/cart-widget.service';
import {Cart,CartItem} from 'src/app/Interfaces/cart';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  quantity: number = 1;
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

  cartItem: CartItem;

  cart$: Observable<any>;
  cart: Cart;

  constructor(private cartService: CartService, private cartWidgetService: CartWidgetService) {
    this.cart$ = this.cartService.cart$.subscribe((cart: Cart) => this.cart = cart);
  }

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
    this.cartItem = {id: '1', name: 'name', color: this.selectedColor, size: this.selectedSize, quantity: this.quantity, image: 'src/assets/product-images/vicky-cheng-unsplash.jpg'}
    this.cartService.addToCart(this.cartItem);
    this.cartWidgetService.setShowWidget(true);
  }
}
