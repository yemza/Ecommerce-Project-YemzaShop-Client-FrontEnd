import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
   
  {
    path : '',
    redirectTo :'/login',
    pathMatch :'full'
  },

  {
    path : '',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
 
  {
    path : 'stickers',
    loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule)
  },


  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
