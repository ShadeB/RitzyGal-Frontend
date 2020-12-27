import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-side-widget',
  templateUrl: './cart-side-widget.component.html',
  styleUrls: ['./cart-side-widget.component.scss']
})
export class CartSideWidgetComponent implements OnInit {

  @Input() sideWidgetActive: boolean = true;
  cartTotal: number = 0;

  cartItems = [
    {id: 1, name: 'dress', image: "../../../assets/product-images/vicky-cheng-unsplash.jpg", quantity: 3, price: 30},
    {id: 2, name: 'dress',image: "../../../assets/product-images/vicky-cheng-unsplash.jpg", quantity: 5, price: 7},
    {id: 3, name: 'dress',image: "../../../assets/product-images/vicky-cheng-unsplash.jpg", quantity: 2, price:8},
    {id: 4, name: 'dress',image: "../../../assets/product-images/vicky-cheng-unsplash.jpg", quantity: 4, price: 12},
    {id: 5, name: 'dress',image: "../../../assets/product-images/vicky-cheng-unsplash.jpg", quantity: 12, price: 18},
    {id: 6, name: 'dress',image: "../../../assets/product-images/vicky-cheng-unsplash.jpg", quantity: 7, price: 120},
  ]

  constructor() { }

  ngOnInit(): void {
    this.getCartTotal();
  }

  sideBarClose() {
    console.log('Close sidebar');
    this.sideWidgetActive = false;
  }

  getCartTotal() {
    this.cartItems.forEach(item => {
      this.cartTotal += (item.price * item.quantity);
    })
  }

}
