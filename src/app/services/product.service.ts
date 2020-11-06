import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly URL = 'https://cors-anywhere.herokuapp.com/localhost:5000/graphql'

  constructor(private http:HttpClient) { }

  public query = `
  query {
    listAllProducts {
      _id
      name
      description
      category
      price
      sizes
      image
      brand
      instock
      rating
      colors {
        Hex
        name
      }
    }
  }
  `

  resolveData():  Observable<any> {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.URL,this.query,headers
     )
  }
}
