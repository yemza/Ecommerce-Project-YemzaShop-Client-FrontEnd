import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { ContainerHomePageComponent } from './Components/container-home-page/container-home-page.component';
import { ResponsiveCarouselComponent } from './Components/container-home-page/responsive-carousel/responsive-carousel.component';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  declarations: [ContainerHomePageComponent, ResponsiveCarouselComponent],
  imports: [CommonModule, HomePageRoutingModule, SharedModule],
})
export class HomePageModule {}
