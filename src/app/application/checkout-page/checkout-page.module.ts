import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutPageRoutingModule } from './checkout-page-routing.module';
import { CartTableProductsComponent } from './Componnts/cart-table-products/cart-table-products.component';
import { ContainerCheckoutPageComponent } from './Componnts/container-checkout-page/container-checkout-page.component';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  declarations: [CartTableProductsComponent, ContainerCheckoutPageComponent],
  imports: [CommonModule, CheckoutPageRoutingModule, SharedModule],
})
export class CheckoutPageModule {}
