import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   
  {
    path : '',
    redirectTo :'/products',
    pathMatch :'full'
  },

  {
    path : '',
    loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
