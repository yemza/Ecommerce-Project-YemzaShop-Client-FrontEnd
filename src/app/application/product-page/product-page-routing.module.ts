import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerHomePageComponent } from '../home-page/Components/container-home-page/container-home-page.component';
import { ContainerProductPageComponent } from './Components/container-product-page/container-product-page.component';

const routes: Routes = [
  {
    path:"",
    component: ContainerProductPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPageRoutingModule { }
