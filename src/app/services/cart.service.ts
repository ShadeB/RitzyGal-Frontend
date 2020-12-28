import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Cart, CartItem} from 'src/app/Interfaces/cart';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartItem: CartItem;
  cart: any = [];
  cart$;

  constructor() {
    this.cart$ = new BehaviorSubject(this.cart);
   }

   addToCart(cartItem: CartItem) {
    let productInCart = false;

    for (let i in this.cart) {
      if(this.cart[i].id === cartItem.id) {
        this.cart[i].quantity += cartItem.quantity
        productInCart = true;
        break;
      }
    }

    if(!productInCart) {
      this.cart.push(cartItem);
    }

    this.cart$.next(this.cart);
   }

   emptyCart() {
     this.cart.length = 0;
     this.cart$.next(this.cart);
   }

}
