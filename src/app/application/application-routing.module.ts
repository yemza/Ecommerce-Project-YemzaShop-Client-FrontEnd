import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../_shared/layout/layout.component';

const routes: Routes = [

  {path : '' ,
   component : LayoutComponent , children:[

    {
        path : 'products',
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
    },
    
    {
      path : 'product',
      loadChildren: () => import('./product-page/product-page.module').then(m => m.ProductPageModule)
    }

   ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
