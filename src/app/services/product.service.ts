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
  getProduct(id: number): Observable<Product> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const product = Products.find(p => p.id === id)!;
    return of(product);
  }
  constructor() { }
}
