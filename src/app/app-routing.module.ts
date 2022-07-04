import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component'
import { ProductComponent } from './component/products/product/product.component'

import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/anasayfa', pathMatch: 'full' },
  { path: 'anasayfa', component: ProductsComponent },
  {path: 'detail/:id', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
