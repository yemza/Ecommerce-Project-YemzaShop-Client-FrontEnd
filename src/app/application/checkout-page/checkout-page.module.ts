import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutPageRoutingModule } from './checkout-page-routing.module';
import { CartTableProductsComponent } from './Componnts/cart-table-products/cart-table-products.component';
import { ContainerCheckoutPageComponent } from './Componnts/container-checkout-page/container-checkout-page.component';


@NgModule({
  declarations: [
    CartTableProductsComponent,
    ContainerCheckoutPageComponent
  ],
  imports: [
    CommonModule,
    CheckoutPageRoutingModule
  ]
})
export class CheckoutPageModule { }
