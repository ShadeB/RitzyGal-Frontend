import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  stars = [1, 2, 3, 4, 5];
  rating = 1;
  hoverState = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  removeFromLocalStorage() {
    localStorage.removeItem("product-to-add");
  }

  addToLocalStorage(productId: String) {
    localStorage.setItem("product-to-add", JSON.stringify(productId));
  }

  openAddToCart(e: Event) {
    e.preventDefault();

    // Clear local storage before saving product id
    this.removeFromLocalStorage();
    this.addToLocalStorage(this.product._id);

    this.router.navigate(['/add-to-cart'])
  }

}
