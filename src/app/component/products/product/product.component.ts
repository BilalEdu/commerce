import { Component, OnInit } from '@angular/core';
//import { Product } from '../../../model/product';
import { Products } from '../../../mock/mock-products'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products = Products;
  constructor() { }

  ngOnInit(): void {
  }

}
