import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../_shared/layout/layout.component';

const routes: Routes = [

  {path : '' ,
   component : LayoutComponent , children:[

    {
        path : '',
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
      }

   ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
