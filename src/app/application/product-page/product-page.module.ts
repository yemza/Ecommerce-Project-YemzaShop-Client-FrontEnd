import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductFormComponent } from './Components/product-form/product-form.component';
import { ProductInfoComponent } from './Components/product-info/product-info.component';
import { ProductImagesComponent } from './Components/product-images/product-images.component';
import { ContainerProductPageComponent } from './Components/container-product-page/container-product-page.component';


@NgModule({
  declarations: [
    ProductFormComponent,
    ProductInfoComponent,
    ProductImagesComponent,
    ContainerProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule
  ]
})
export class ProductPageModule { }
