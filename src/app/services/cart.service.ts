import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Cart, CartItem} from 'src/app/Interfaces/cart';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartItem: CartItem;
  cart: CartItem[] = [];
  itemsInCart: number = 0;
  cartTotal: number = 0;
  cart$;

  constructor() {
    this.cart$ = new BehaviorSubject(this.cart);
   }

   behaviourSubjectNext():void {
    this.cart$.next(this.cart);
   }

   setTotalCartItems() {
    let cartItems = 0;
     this.cart.forEach((item: CartItem) => {
       cartItems += item.quantity;
     })
     this.itemsInCart = cartItems;
   }

   getTotalCartItems() {
     return this.itemsInCart;
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
    this.setTotalCartItems();
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
    this.setTotalCartItems();
    this.behaviourSubjectNext();
   }

   emptyCart() {
     this.cart.length = 0;
     this.cart$.next(this.cart);
   }

   isCartEmpty() {
     let isCartEmpty = false;
     isCartEmpty = this.cart.length === 0 ? !isCartEmpty : isCartEmpty;
     return isCartEmpty;
   }

   updateItemQuantity(quantity: number, itemId: string) {
    for (let i in this.cart) {
      if(this.cart[i].id === itemId) {
        this.cart[i].quantity = quantity;
        this.setTotalCartItems();
        this.behaviourSubjectNext();
        break;
      }
    }
   }

}
