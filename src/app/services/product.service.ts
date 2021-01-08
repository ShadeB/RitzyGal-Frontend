import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import {AllProductsQuery} from 'src/app/graphql/queries/allProductsQuery';
import { ApolloQueryResult } from '@apollo/client/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apollo: Apollo) { }

  getProducts():  Observable<ApolloQueryResult<any>> {
    return this.apollo.query<AllProductsQuery>({
      query: AllProductsQuery
    }).pipe(
      catchError(err => of(err))
    );
  }
}
