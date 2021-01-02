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
  cart: CartItem[];
  cartTotal: number = 0;

  constructor(private cartWidgetService: CartWidgetService, private cartService: CartService) { }

  ngOnInit(): void {
    this.sideWidgetActive = this.cartWidgetService.getShowWidget();
    this.cartService.onCartChange().subscribe( (cart) => {
      this.getCartTotal();
      this.cart = cart;
    })
  }

  sideBarClose() {
    this.cartWidgetService.setShowWidget(true);
  }

  getCartTotal() {
    this.cartTotal = this.cartService.getCartTotal();
  }
}
