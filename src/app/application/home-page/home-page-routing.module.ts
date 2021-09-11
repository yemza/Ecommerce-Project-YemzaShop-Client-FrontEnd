import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerHomePageComponent } from './Components/container-home-page/container-home-page.component';

const routes: Routes = [
  {path : '',
  component : ContainerHomePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
