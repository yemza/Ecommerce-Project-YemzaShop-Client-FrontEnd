import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerCheckoutPageComponent } from './Componnts/container-checkout-page/container-checkout-page.component';

const routes: Routes = [

  {
    path:"",
    component: ContainerCheckoutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutPageRoutingModule { }
