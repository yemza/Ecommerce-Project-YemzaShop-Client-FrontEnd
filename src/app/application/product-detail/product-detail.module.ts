import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductFormComponent } from './Components/product-form/product-form.component';
import { ProductInfoComponent } from './Components/product-info/product-info.component';
import { ProductImagesComponent } from './Components/product-images/product-images.component';
import { ContainerProductPageComponent } from './Components/container-product-page/container-product-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  declarations: [
    ProductFormComponent,
    ProductInfoComponent,
    ProductImagesComponent,
    ContainerProductPageComponent,
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ProductDetailModule {}
