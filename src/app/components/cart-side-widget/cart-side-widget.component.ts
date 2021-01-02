import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';
import {CartService} from 'src/app/services/cart.service';
import {CartWidgetService} from 'src/app/services/cart-widget.service';

import {CartItem} from 'src/app/Interfaces/cart';


@Component({
  selector: 'app-cart-side-widget',
  templateUrl: './cart-side-widget.component.html',
  styleUrls: ['./cart-side-widget.component.scss']
})
export class CartSideWidgetComponent implements OnInit {

  sideWidgetActive: Observable<boolean>;
  cartItem: CartItem;
  cartTotal: number = 0;

  cartItems = [
    {id: 1, name: 'dress', image: "../../../assets/product-images/vicky-cheng-unsplash.jpg", quantity: 3, price: 30},
    {id: 2, name: 'dress',image: "../../../assets/product-images/vicky-cheng-unsplash.jpg", quantity: 5, price: 7},
    {id: 3, name: 'dress',image: "../../../assets/product-images/vicky-cheng-unsplash.jpg", quantity: 2, price:8},
    {id: 4, name: 'dress',image: "../../../assets/product-images/vicky-cheng-unsplash.jpg", quantity: 4, price: 12},
    {id: 5, name: 'dress',image: "../../../assets/product-images/vicky-cheng-unsplash.jpg", quantity: 12, price: 18},
    {id: 6, name: 'dress',image: "../../../assets/product-images/vicky-cheng-unsplash.jpg", quantity: 7, price: 120},
  ]

  constructor(private cartWidgetService: CartWidgetService, private cartService: CartService) { }

  ngOnInit(): void {
    this.sideWidgetActive = this.cartWidgetService.getShowWidget();
    this.cartService.onCartChange().subscribe( () => {
      this.getCartTotal();
    })
  }

  sideBarClose() {
    this.cartWidgetService.setShowWidget(true);
  }

  getCartTotal() {
    this.cartTotal = this.cartService.getCartTotal();
  }
}
