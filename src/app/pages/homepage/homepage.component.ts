import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { AllProductsQuery } from '../../graphql/queries/allProductsQuery';
import { Product } from '../../Interfaces/product';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  products: Product[];
  loading: boolean = true;
  errors: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .query<any>({
        query: AllProductsQuery
      })
      .subscribe(
        ({ data, error, loading }) => {
          this.products = data.listAllProducts;
          this.loading = loading;
          this.errors = error;
        })
  }

}
