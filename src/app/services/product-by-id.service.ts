import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import { map } from 'rxjs/operators';

import { productByIdQuery } from 'src/app/graphql/queries/productById';
import { Product } from 'src/app/Interfaces/product';


@Injectable({
  providedIn: 'root'
})

export class ProductByIdService{
  constructor(private apollo: Apollo) {
  }

  getProduct(id: string): Observable<Product> {
    return this.apollo.query<productByIdQuery>({
      query: productByIdQuery,
      variables: {id}
    }).pipe(map(result => {
      let product = { ...result.data.findProductById }
      return product;
    }))
  }
}
