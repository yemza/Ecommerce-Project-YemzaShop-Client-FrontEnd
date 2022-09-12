import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ContainerHomePageComponent } from './Components/container-home-page/container-home-page.component';
import { ProductCardListComponent } from './Components/product-card-list/product-card-list.component';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  declarations: [ContainerHomePageComponent, ProductCardListComponent],
  imports: [CommonModule, ProductListRoutingModule, SharedModule],
})
export class ProductListModule {}
