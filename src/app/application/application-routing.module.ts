import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../_shared/components/about/about.component';
import { ContactComponent } from '../_shared/components/contact/contact.component';
import { LayoutComponent } from '../_shared/layout/layout.component';

const routes: Routes = [

 

  {path : '' ,
   component : LayoutComponent , children:[

    {
      path : 'home',
      loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
  },
    {
        path : 'products',
        loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule)
    },
    
    {
      path : 'product/:id',
      loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailModule)
    },
    {
      path : 'checkout',
      loadChildren: () => import('./checkout-page/checkout-page.module').then(m => m.CheckoutPageModule)
    },

    {
      path : 'About-us',
      component: AboutComponent
    },
  
    {
      path : 'contact-us',
       component : ContactComponent
    },

   ]},
   {
    path : '**',
    redirectTo :'/home',
    pathMatch :'full'
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
