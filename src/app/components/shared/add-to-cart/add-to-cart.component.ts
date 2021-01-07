import { Component, OnInit,Input } from '@angular/core';
import {Observable} from 'rxjs';

import {CartService} from 'src/app/services/cart.service';
import {CartWidgetService} from 'src/app/services/cart-widget.service';
import {Cart,CartItem} from 'src/app/Interfaces/cart';
import {Color, Product} from 'src/app/Interfaces/product';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  @Input() product: Product;
  quantity: number = 1;
  selectedColor: string = '';
  selectedSize: number;
  colorHexValue: string = '';
  colors: [Color];

  sizes = {s: "small", m: "medium", l: "large"}

  cartItem: CartItem;
  cart$: Observable<any>;
  cart: Cart;

  constructor(private cartService: CartService, private cartWidgetService: CartWidgetService) {
    this.cart$ = this.cartService.cart$.subscribe((cart: Cart) => this.cart = cart);
  }

  ngOnInit(): void {
    this.setColorOptions();
  }

  setColorOptions(): void{
    this.colors = this.product.colors;
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

  setCartItem(): void {
    let cartItem = {id: this.product._id, name: this.product.name, color: this.selectedColor, size: this.selectedSize, quantity: this.quantity, image: this.product.image, price: this.product.price};
    this.cartItem = cartItem;
  }

  addToCart(event: Event) {
    event.preventDefault();
    this.setCartItem();
    this.cartService.addToCart(this.cartItem);
    this.cartWidgetService.setShowWidget(true);
  }
}
