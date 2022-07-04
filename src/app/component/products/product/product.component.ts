import { Component, OnInit } from '@angular/core';
import { Product } from '../../../model/product';
import { Products } from '../../../mock/mock-products';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  selectedProducts?: Product;

   //product: Product | undefined;
   constructor(private productService: ProductService) {}  

   getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  onSelect(product: Product): void {
    this.selectedProducts = product;
  }
  showLoader(){
    
  }
  ngOnInit(): void {
    this.getProducts();
  }

  
}
