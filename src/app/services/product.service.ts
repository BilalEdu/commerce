import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Products } from '../mock/mock-products'
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public addedItems: any=[];
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
  addProduct(product: Product){/* burada eklenmiş ürünün idsine bakarak daha önce eklenmişse quantitysi 1 arttırılır eklenmemişse 
  direkt sepete eklenir.  */
    this.addedItems.push(product);
  }
  
  getTotal(): number{
    let total = 0;
    this.addedItems.map((a:any)=>{
      total+=a.price;
    })
    return total;
  }

  getAllProducts(){
    return this.addedItems;
  }

  constructor() { }
}
