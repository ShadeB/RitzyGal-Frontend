import { Injectable, Input } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from 'src/app/Interfaces/product';
import {ProductByIdService} from 'src/app/services/product-by-id.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsResolverService implements Resolve<Product>{
  constructor(private productByIdService: ProductByIdService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Product>{
    return this.productByIdService.getProduct(route.paramMap.get('id'));
  }
}
