import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Cart, CartItem} from 'src/app/Interfaces/cart';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartItem: CartItem;
  cart: CartItem[] = [];
  cartTotal: number = 0;
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

   onCartChange() {
    return this.cart$.asObservable();
   }

   getCartTotal() {
    let total = 0;
    this.cart.forEach((item: CartItem) => {
      total += (item.price * item.quantity);
    })
    this.cartTotal = total;
    return this.cartTotal;
   }

   removeItemFromCart(id: string) {
    for (let i in this.cart) {
      if(this.cart[i].id === id) {
        let itemIndex = parseInt(i, 10);
        this.cart.splice(itemIndex, 1);
      }
    }
   }

   emptyCart() {
     this.cart.length = 0;
     this.cart$.next(this.cart);
   }

   updateItemQuantity(quantity: number, itemId: string) {
    for (let i in this.cart) {
      if(this.cart[i].id === itemId) {
        this.cart[i].quantity = quantity;
        break;
      }
    }
   }

}
