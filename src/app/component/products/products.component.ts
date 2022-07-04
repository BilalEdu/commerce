import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  selectedProducts?: Product;

  onSelect(product: Product): void {
    this.selectedProducts = product;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
