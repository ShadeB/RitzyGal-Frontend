import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';

import { productByIdQuery } from 'src/app/graphql/queries/productById';



@Injectable({
  providedIn: 'root'
})

export class ProductByIdService{
  constructor(private apollo: Apollo) {
  }

  getProduct(id: string): Observable<any> {
    return this.apollo.query<any>({
      query: productByIdQuery,
      variables: {id}
    })
  }
}
