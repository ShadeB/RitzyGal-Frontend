import { Component, OnInit } from '@angular/core';
import {CartService} from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemsInCart: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.onCartChange().subscribe(() => {
      this.getTotalItemsInCart();
    })
  }

  getTotalItemsInCart() {
    this.itemsInCart = this.cartService.getTotalCartItems();
  }

}
