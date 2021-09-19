import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ContainerHomePageComponent } from './Components/container-home-page/container-home-page.component';
import { ProductCardListComponent } from './Components/product-card-list/product-card-list.component';


@NgModule({
  declarations: [
    ContainerHomePageComponent,
    ProductCardListComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule
  ]
})
export class ProductListModule { }
