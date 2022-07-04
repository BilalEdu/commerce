import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Products } from '../mock/mock-products'
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {


  getProducts(): Observable<Product[]> {
    const products = of(Products);
    return products;
  }
  constructor() { }
}
